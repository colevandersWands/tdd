/* todo
  render getter/setter source instead of value?
    https://stackoverflow.com/questions/8591873/determine-if-a-javascript-property-has-a-getter-or-setter-defined
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
*/

/* opinionated & lazy formatting

  assumes double-spaced indentation
    but that's configurable in toString.indent
    and could be set as a configuration option in the iife

  function stringing is the worst
    it assumes you have a linter & prettier
    and that your linter/prettier does double-spaced indentation
    could use prettier.js, but that's fat for this purpose

*/

const { toString, toVariableString, studyInJsTutor, logJsTutorLink, jsTutorLink } = (() => {

  const toString = (thing, depth) => {

    depth = depth === undefined
      ? 1
      : depth;

    let stringed;
    if (typeof thing === 'function') {
      stringed = toString.function(thing);

    } else if (thing.constructor.name === 'Array') {
      stringed = toString.array(thing, depth);

    } else if (thing.constructor.name === 'Object') {
      stringed = toString.object(thing, depth);

    } else if (typeof thing === 'string') {
      stringed = toString.string(thing);

    } else if (typeof thing === 'number') {
      stringed = toString.number(thing);

    } else if (typeof thing === 'boolean') {
      stringed = toString.boolean(thing);

    } else if (typeof thing === 'symbol') {
      stringed = toString.symbol(thing);

    } else if (thing === undefined) {
      stringed = toString.undefined(thing);

    } else if (thing === null) {
      stringed = toString.null(thing);

    } else {
      stringed = '"un-toString-able type"';
    }

    return stringed;
  }

  toString.indent = (depth) => {
    let indent = '';
    for (let i = 0; i < depth; i++) indent += '  ';
    return indent;
  }

  toString.object = (obj, depth) => {

    if (Object.keys(obj).length === 0) return '{}';

    depth = depth === undefined
      ? 1
      : depth;
    const indent = toString.indent(depth);

    const arrayToJoin = ['{\n'];
    for (let key in obj) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key);

      if (descriptor.get) {
        arrayToJoin.push(indent + toString(descriptor.get, depth + 1));
        arrayToJoin.push(',\n');
      }

      if (descriptor.set) {
        arrayToJoin.push(indent + toString(descriptor.set, depth + 1));
        arrayToJoin.push(',\n');
      }

      if (descriptor.value) {
        arrayToJoin.push(indent + key + ': ');
        arrayToJoin.push(toString(descriptor.value, depth + 1));
        arrayToJoin.push(',\n');
      }
    }
    arrayToJoin.push(toString.indent(depth - 1) + `}`);

    return arrayToJoin.join('');
  };

  toString.array = (arr, depth) => {

    if (arr.length === 0) return '[]';

    // depth = depth === undefined
    //   ? 1
    //   : depth;
    // const indent = toString.indent(depth);

    const arrayToJoin = ['['];
    for (let entry of arr) {
      // arrayToJoin.push(indent);
      arrayToJoin.push(toString(entry, depth + 1));
      arrayToJoin.push(', ');
    }
    arrayToJoin.pop();
    // arrayToJoin.push(toString.indent(depth - 1) + `]`);
    arrayToJoin.push(`]`);

    return arrayToJoin.join('');
  };

  toString.function = func => func.toString();

  toString.string = str => `"` + str + `"`;

  toString.boolean = String;

  toString.number = String;

  toString.symbol = String;

  toString.null = String;

  toString.undefined = String;

  Object.freeze(toString);

  const toVariableString = (value) => {
    const valueString = toString(value);
    const varName = typeof value === 'object' && value !== null
      ? value.constructor.name.toLowerCase(0)
      : typeof value === 'function'
        ? 'func'
        : (typeof value).substr(0, 3);
    const variabled = `const ${varName} = ${valueString};`;
    return variabled
  }

  const jsTutorLink = (value) => {
    const snippet = toVariableString(value);
    const encoded = encodeURIComponent(snippet);
    const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
    const deTabbed = sanitized.replace(/%09/g, '%20%20');

    const url = "http://www.pythontutor.com/live.html#code="
      + deTabbed
      + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";

    return url;
  }

  const logJsTutorLink = (value) => {
    console.groupCollapsed('JS Tutor link');
    {
      console.log(jsTutorLink(value));
    }
    console.groupEnd();
  };

  const studyInJsTutor = (value) => {
    const url = jsTutorLink(value);
    window.open(url, '_blank');
  }

  return {
    toString,
    toVariableString,
    jsTutorLink,
    logJsTutorLink,
    studyInJsTutor
  }
})()

