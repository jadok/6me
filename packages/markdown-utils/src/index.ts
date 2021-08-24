export interface Chapter {
  title: string;
  content: string;
  subs: Chapter[];
}

export type Heading = number | string[];

export const endHeading = (
  data: Chapter[],
  heading: Heading,
  linesContent: string,
  currentHeadingNbr = 1
) => {
  const headingNbr = Number.isInteger(heading)
    ? heading
    : (heading as string[])[0].length;
  const currentLength = data.length;
  if (currentHeadingNbr < headingNbr) {
    if (currentLength) {
      endHeading(
        data[currentLength - 1].subs,
        heading,
        linesContent,
        currentHeadingNbr + 1
      );
    }
  } else if (currentHeadingNbr === headingNbr) {
    if (Number.isInteger(heading)) {
      data[currentLength - 1].content = linesContent;
    } else {
      const newData: Chapter = {
        title: (heading as string[])[1],
        content: linesContent.trim(),
        subs: [],
      };
      data.push(newData);
    }
  }
};

/**
 * Format Raw Markdown into hierachical structured data.
 *
 * @param lines Markdown file line by line.
 * @param output Markdown sorted in structural data.
 */
export const splitHeaders = (lines: string[], output: Chapter[]) => {
  let buffer = "";
  let lastHeading = 0;

  // print all lines
  lines.forEach((line) => {
    if (line.startsWith("#")) {
      const heading = line.split(" ");
      endHeading(output, heading, buffer);
      buffer = "";
      lastHeading = heading[0].length;
    } else {
      buffer = buffer.concat("\n", line);
    }
  });
  endHeading(output, lastHeading, buffer);
};
