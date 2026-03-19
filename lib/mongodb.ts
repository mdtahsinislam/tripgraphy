

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\lib\mongodb.ts
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI as string;

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (!global._mongoClientPromise) {
//   client = new MongoClient(uri);
//   global._mongoClientPromise = client.connect();
// }

// clientPromise = global._mongoClientPromise;

// export default clientPromise;


// // my code is almost correct output also correct solve  the deployment error give me the full code 
// PS C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy> npm run build

// > tripgraphy@0.1.0 build
// > next build

// [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
//  ⚠ `images.domains` is deprecated in favor of `images.remotePatterns`. Please update next.config.ts to protect your application from malicious users.
//    ▲ Next.js 16.0.3 (Turbopack)
//    - Environments: .env.local

//    Creating an optimized production build ...
// [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
//  ✓ Compiled successfully in 13.4s
//    Running TypeScript  ..Failed to compile.

// ./lib/mongodb.ts:11:13
// Type error: Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.

//    9 | let clientPromise: Promise<MongoClient>;
//   10 |
// > 11 | if (!global._mongoClientPromise) {
//      |             ^
//   12 |   client = new MongoClient(uri);
//   13 |   global._mongoClientPromise = client.connect();
//   14 | }
// Next.js build worker exited with code: 1 and signal: null
// PS C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy> 




import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

// ✅ Extend global type
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;