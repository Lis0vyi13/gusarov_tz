import InputGroup from "./components/InputGroup/InputGroup";
import Info from "./icons/Info";

function App() {
  return (
    <div>
      <div style={{ width: 255 }}>
        <InputGroup
          label="Enter your personal"
          inputId="email"
          quiet
          position="side"
          placeholder="Enter password"
          required
          helperText="Enter your personal email address (optional)"
        />
      </div>
      <div style={{ width: 200 }}>
        <InputGroup
          label="Email"
          inputId="email"
          placeholder="e.g. johndoe@gmail.com"
          infoIcon={<Info />}
          iconBefore={<Info />}
          iconAfter={<Info />}
          shortkey
          helperText="sasfffffffffffffffffffff"
          disabled
          fieldSize={36}
          tooltipText="sdfdfs"
          type="email"
        />
      </div>
      <div style={{ width: 200 }}>
        <InputGroup
          label="Emailфывввввввввфысфысфысфысфысфы"
          inputId="email"
          placeholder="Input..."
          quiet
          variants="outline"
          position="side"
        />
      </div>
      <div style={{ width: 245 }}>
        <InputGroup
          label="Enter your personal email address (optional)"
          inputId="email"
          placeholder="e.g..."
          fieldSize={36}
          optional
          disabled
          position="side"
          helperText="121124"
        />
      </div>
    </div>
  );
}

export default App;

