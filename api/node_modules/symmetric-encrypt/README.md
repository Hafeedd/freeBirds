# symmetric-encrypt

> Password-based encryption and decryption in Node.js

- Encrypt and decrypt data using a password
- AES-GCM for fast and secure symmetric encryption
- Argon2Id for high work-factor and ASIC-resistant key derivation, using Libsodium compiled to WASM
- Portable function parameters for encryption and key derivation, encoded in the output for backwards compatibility
- Designed to use with a separate persistence layer

### Instal

```bash
npm install symmetric-encrypt
```

Requires Node.js 10+.

### Usage

```js
const { generateEncryptionKey, decrypt } = require('symmetric-encrypt')

async function run() {
  /**
   * The key only needs to be generated once per session, so
   * `encrypt` can be called multiple times with different messages
   */
  const encrypt = await generateEncryptionKey('this is a password')
  const encryptedConfig = await encrypt('this is the message')

  /**
   * For instance, `encryptedConfig` could be encoded
   * in JSON and written to a file. Later, the file could
   * be opened and parsed as JSON, to be decrypted.
   */

  const message = await decrypt('this is a password', encryptedConfig)
  console.log(message) // -> "this is a message"
}

run().catch(err => console.error(err))
```
