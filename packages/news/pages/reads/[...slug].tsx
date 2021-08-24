import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import Layout from '../../components/personnal/layout'

import PostBody from '../../components/personnal/post-body'
import PostHeader from '../../components/personnal/post-header'

import PostType from '../../types/post'

import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPostsPaths } from '../../lib/api'
import { join, sep } from 'path'
import { postsDirectory } from '../../lib/constants'
import ContentType from '../../types/content';

type Props = {
  post: PostType
  morePosts: PostType[]
}

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Jadok.me
              </title>
            </Head>
            <PostHeader
              title={post.title}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  )
}

export default Post

type Params = {
  params: any
}

export async function getStaticProps({ params }: Params) {
  return getPostBySlug(join(postsDirectory, ...params.slug), [
    'title',
    'date',
    'slug',
    // 'author',
    'content',
    // 'ogImage',
    // 'coverImage',
  ]).then((post) => {
    const content = markdownToHtml(post.content || '')
    const postData = {
      ...post,
      slug: params.slug,
      content,
    };
    return {
      props: {
        post: postData,
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getAllPostsPaths(['slug'])
    .then((slugs: Array<Partial<ContentType>>) =>
      slugs.map(({ path }: Partial<ContentType>) => ({
        params: { slug:  (path as string).split(sep) }
      })));
  return {
    paths,
    fallback: false,
  }
}
