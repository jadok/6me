import fs from 'fs'
import { extname, join, resolve, sep } from 'path'
import matter from 'gray-matter'
import { postsDirectory } from './constants';
import ContentType from '../types/content';

/**
* Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
* 
* @see http://stackoverflow.com/a/5827895/4241030
* @param {String} dir 
* @param {Function} done 
*/
const filewalker = (dir: string, done: (err: NodeJS.ErrnoException | null, files: string[]) => void): void => {
  let results: Array<string> = [];
  
  fs.readdir(dir, function(err, list) {
    if (err) return done(err, results);
    
    var pending = list.length;
    
    if (!pending) return done(null, results);
    
    list.forEach(function(file){
      file = resolve(dir, file);
      
      fs.stat(file, function(err, stat){
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          // results.push(file);
          
          filewalker(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const getFileWithoutExtension = (filename: string): string => {
  const extName = extname(filename);
  return filename.slice(0, filename.length - extName.length)
}

const cleanFilename = (file: string): string => getFileWithoutExtension(file).replace(postsDirectory + sep, '');

type Items = {
  [key: string]: string
}

export const getPostSlugs = async (): Promise<Array<string>> => new Promise((resolve, reject) => filewalker(postsDirectory, (err, files) => {
  if (err) reject(err);
  resolve(files);
}));

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  return getPostSlugs().then((files) => {
    const matchingFile = files.filter((file) => {
      return slug === getFileWithoutExtension(file);
    });
    const fileContents = fs.readFileSync(matchingFile[0], 'utf8');
    const { data, content } = matter(fileContents);
    return fields.reduce((items: Items, field: string) => {
      if (field === 'content') {
        items[field] = content
      }
      
      if (data[field]) {
        items[field] = data[field]
      }
      return items;
    }, {} as Items);
  })
}

export const getAllPostsPaths = async (fields: string[] = []): Promise<Array<Partial<ContentType>>> => {
  return getPostSlugs().then((files) => files.map((file) => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const { data } = matter(fileContents);
    data.path = cleanFilename(file);
    return data;
  }));
  // // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
