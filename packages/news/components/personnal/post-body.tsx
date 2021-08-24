import React from 'react'

type Props = {
  content: string
}

const PostBody = ({ content }: Props): JSX.Element => (
  <div className="content">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default PostBody
