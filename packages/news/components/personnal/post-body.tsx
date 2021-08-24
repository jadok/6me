import React from 'react';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => (
  <div className="content">
    <div
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody
