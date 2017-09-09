/**
 * Class which contains Util generated content class.
 *
 * @export
 * @class Util
 */
export class Util {

  /**
   * This method returns Util class string content
   * @return {string} - Util class content as string
   */
  public getUtil(): string {
    return `class Util {
  generateLocationUri(request, id) {
    return request.protocol + '://' + request.get('host') + request.originalUrl + '/' + id;
  }
}

module.exports = new Util();`;
  }
}

export default new Util();
