const Code = () => {
  return (
    <div className="mockup-code w-full sm:max-w-full max-w-xs">
      <pre data-prefix="1">
        <code>{`import deepmerge from "ts-deepmerge";`}</code>
      </pre>
      <pre data-prefix="2">
        <code></code>
      </pre>
      <pre data-prefix="3">
        <code>{`const obj1 = {`}</code>
      </pre>
      <pre data-prefix="4">
        <code className="ml-2">{`text: "Olá"`}</code>
      </pre>
      <pre data-prefix="5">
        <code>{`};`}</code>
      </pre>
      <pre data-prefix="6">
        <code></code>
      </pre>
      <pre data-prefix="7">
        <code>{`const obj2 = {`}</code>
      </pre>
      <pre data-prefix="8">
        <code className="ml-2">{`text: "Hello"`}</code>
      </pre>
      <pre data-prefix="9">
        <code>{`};`}</code>
      </pre>
      <pre data-prefix="10">
        <code></code>
      </pre>
      <pre data-prefix="11">
        <code>{`const test = deepmerge(obj1, obj2);`}</code>
      </pre>
      <pre data-prefix="12" className="bg-info text-info-content">
        <code>console.log(test);</code>
      </pre>
      <pre data-prefix="13" className="bg-secondary text-secondary-content">
        <code>{`{`}</code>
      </pre>
      <pre data-prefix="14" className="bg-secondary text-secondary-content">
        <code className="ml-2">{`text: "Hello"`}</code>
      </pre>
      <pre data-prefix="15" className="bg-secondary text-secondary-content">
        <code>{`};`}</code>
      </pre>
      <pre data-prefix="16">
        <code></code>
      </pre>
      <pre data-prefix="17">
        <code>{`const arrayObj1 = [{ text: "Olá" }]`}</code>
      </pre>
      <pre data-prefix="18">
        <code>{`const arrayObj2 = [{ text: "Hello" }]`}</code>
      </pre>
      <pre data-prefix="19">
        <code>{`const test2 = deepmerge(arrayObj1, arrayObj2);`}</code>
      </pre>
      <pre data-prefix="12" className="bg-info text-info-content">
        <code>console.log(test2);</code>
      </pre>
      <pre data-prefix="13" className="bg-secondary text-secondary-content">
        <code>{`[`}</code>
      </pre>
      <pre data-prefix="14" className="bg-secondary text-secondary-content">
        <code className="ml-2">{`{ text: "Olá" }, { text: "Hello "}`}</code>
      </pre>
      <pre data-prefix="15" className="bg-secondary text-secondary-content">
        <code>{`];`}</code>
      </pre>
    </div>
  );
};

export default Code;
