import modelGenerator from '../../generators/api/models';
import fileUtil from '../../commons/utils/fileUtil';
import DIRECTORY_STRUCTURE from '../../commons/constants/directoryStructure';
import config from '../../generators/api/config/config';
import cors from '../../generators/api/config/cors';
import express from '../../generators/api/config/express';
import router from '../../generators/api/config/router';
import index from '../../generators/api/config/index';
import {ConnectionData, Schema} from '../../commons/types';

export class ConfigurationFileOperations {

  /**
   * Generate general configuration
   * @param {string} filePath - file path where api will be generated
   * @return {Promise<boolean>}
   */
  public async initializeConfig(filePath: string): Promise<boolean> {
    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.CONFIG, 'config.js'),
      config.getConfig()
    );
  }

  /**
   * Generate get env based config util class
   * @param {string} filePath - file path where api will be generated
   * @return {Promise<boolean>}
   */
  public async initializeGetEnvBasedConfig(filePath: string): Promise<boolean> {
    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.CONFIG, 'index.js'),
      config.getEnvBasedConfig()
    );
  }

  /**
   * Generate database configuration
   * @param {Connection data} connection - connection info
   * @param {string} filePath
   * @return {Promise<boolean>}
   */
  public async initializeDbConfig(connection: ConnectionData, filePath: string): Promise<boolean> {
    let config: string = '';
    switch (connection.dialect) {
      case 'MySql':
        config = modelGenerator.sequelize.getConfig(connection);
      default:
    }

    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.CONFIG, 'database.js'),
      config
    );
  }

  /**
   * Initialize cors configuration
   * @param filePath - file path where api will be generated
   * @return {Promise<boolean>}
   */
  public async initializeCorsConfig(filePath: string): Promise<boolean> {
    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.MIDDLEWARES, 'cors.js'),
      cors.getCorsConfig()
    );
  }

  /**
   * Initialize express configuration
   * @return {Promise<boolean>}
   * @memberOf ApiFileOperations
   */
  public async initializeExpressConfig(filePath: string): Promise<boolean> {
    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.CONFIG, 'express.js'),
      express.getExpressConfig()
    )
  }

  /**
   * Initialize express configuration
   * @param filePath - file path where api will be generated
   * @param schema - database schema table
   * @return {Promise<boolean>}
   */
  public async initializeRouterConfig(filePath: string, schema: Schema): Promise<boolean> {
    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.CONFIG, 'router.js'),
      router.getRouterConfig(schema)
    );
  }

  /**
   * Initialize main index.js file
   * @param filePath - file path where api will be generated
   * @return {Promise<boolean>}
   */
  public async initializeIndex(filePath: string): Promise<boolean> {
    return fileUtil.writeFile(
      fileUtil.joinPaths(filePath, DIRECTORY_STRUCTURE.API_STRUCTURE.SRC, 'index.js'),
      index.getIndex());
  }
}

export default new ConfigurationFileOperations();