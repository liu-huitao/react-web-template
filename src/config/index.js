/*
 * @Author: liuhuitao
 * @Date: 2019-07-2 9:10:2
 * @Last Modified by: liuhuitao
 * @Last Modified time: 2020-01-22 10:40:23
 * description: uum 配置文件(import {} from '@/config')
 */
export const uumConfig = {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: "xxx 项目",
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: {
      api: "api", // api服务
      map: "map", // 地图服务
      file: "file", // 上传文件服务,
      source: "source", // 上传文件拿到的文件服务
      monitor: "monitor"
    }, // 开发模式本地服务
    pro: {
      api: "api",
      map: "map",
      file: "file",
      source: "source",
      monitor: "monitor"
    } // 生产模式线上服务
  }
};
let env = process.env.NODE_ENV === "development" ? "dev" : "pro";
const { api, map, file, source, monitor } = uumConfig.baseUrl[env];
const projectTitle = uumConfig.title;
export {
  api as $api,
  map as $map,
  file as $file,
  source as $source,
  monitor as $monitor,
  projectTitle
};
