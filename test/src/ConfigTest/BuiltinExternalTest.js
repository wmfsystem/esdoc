import {readDoc as _readDoc, assert, cli} from '../util.js';

/** @test {ESDoc._useBuiltinExternal} */
describe('test config.builtinExternal: false', ()=>{
  cli('./test/fixture/config/esdoc-builtinExternal.json');

  function readDoc(filePath) {
    return _readDoc(filePath, './test/fixture/dest/esdoc-builtinExternal');
  }

  it('does not have builtin external link', ()=>{
    const doc = readDoc('class/src/Type/Array.js~TestTypeArray.html');
    assert.throws(()=>{
      assert.includes(doc, 'a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"]', 'number');
    });
  });
});
