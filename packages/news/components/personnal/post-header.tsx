import React from 'react'
import DateFormatter from '../date-formatter'

type Props = {
  title: string
  date?: string
}

const PostHeader = ({ title, date }: Props): JSX.Element => (
  <>
    <h1>{title}</h1>
    {date && (
      <div>
        <DateFormatter dateString={date} />
      </div>
    )}
  </>
)

export default PostHeader
