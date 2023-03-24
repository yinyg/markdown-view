import request from '../utils/request';

export function queryDocument() {
  return request('https://raw.githubusercontent.com/yinyg/notes/main/mysql/%E9%99%84%E5%BD%952%E3%80%81%E9%94%81.md');
}
