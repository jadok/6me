import React from "react";

import { Quote as QuoteType, AnonymAuthor, PublicAuthor } from "@graphql-types@";
import markdownToHtml from "lib/post/markdownToHtml";

export const Quote = ({
  quote,
  author,
  medium,
}: QuoteType): JSX.Element => {
  const authorMode = (author as AnonymAuthor).pseudo ? (
    <span className={`author-pseudo`}>
      {` - ${(author as AnonymAuthor).pseudo}`}
    </span>
    ) : (
      <span className={`author-public`}>
        {" - "}
        <span className="firstname">{(author as PublicAuthor).firstname}</span>
        {` `}
        <span className="lastname">{(author as PublicAuthor).lastname}</span>
      </span>
    );
  return (
    <li className={`quote ${medium}`}>
      <span className="content" dangerouslySetInnerHTML={{ __html: markdownToHtml(quote) }} />
      {authorMode}
    </li>
  );
}
