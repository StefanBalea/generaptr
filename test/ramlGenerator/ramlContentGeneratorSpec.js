const assert = require('assert');
const RamlContentGenerator = require('../../src/ramlGenerator/ramlContentGenerator');
const before = require('mocha').before;

describe('print', () => {
    before(() => {

        // table mock
        this.table = {
            name: 'users',
            columns: {
                id: {
                    nullable: 'NO',
                    type: 'number',
                    length: null
                },
                firstname: {
                    nullable: 'YES',
                    type: 'string',
                    length: 45
                }
            }
        };
    });

    it('should create raml type content', () => {
        const expectedResponse = '#%RAML 1.0 DataType\n'
            + 'type: object\n'
            + 'properties:'
            + '\n  id: number'
            + '\n  firstname?: string';

        const typeContent = RamlContentGenerator.generateTypeContent(this.table);
        assert.equal(typeContent, expectedResponse);
    });
});