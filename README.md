<p align="center"><img src="https://truckersmp.com/assets/img/truckersmp-logo-sm.png"></p>

<p align="center">
<a href="https://github.com/TruckersMP/API-Types/blob/HEAD/LICENSE.md"><img alt="GitHub" src="https://img.shields.io/github/license/TruckersMP/api-types"></a>
<a href="https://www.npmjs.com/package/@truckersmp/api-types"><img alt="npm" src="https://img.shields.io/npm/v/@truckersmp/api-types"></a>
<a href="https://www.npmjs.com/package/@truckersmp/api-types"><img alt="npm" src="https://img.shields.io/npm/dt/@truckersmp/api-types"></a>
<a href="https://github.com/TruckersMP/API-Types/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/TruckersMP/API-Types/actions/workflows/ci.yml/badge.svg"></a>
</p>

## Introduction

This simple TruckersMP TypeScript library provides type definitions for the TruckersMP API (and other connected
services). It should be used along an HTTP client library for actually invoking requests.

### Disclaimer

This library supports only documented properties.

## Installation

Install with npm / yarn:

```
npm install @truckersmp/api-types
yarn add @truckersmp/api-types
```

## Example

Performing a `GET` request to retrieve player's data using the [axios](https://github.com/axios/axios) library:

```ts
import axios, { AxiosInstance } from 'axios';
import { APIWebRoutes, APIWebRouteBases } from '@truckersmp/api-types/v2';
import type { APIPlayer, APIResponse } from '@truckersmp/api-types/v2';

class APIManager {
  private readonly web: AxiosInstance;

  public constructor() {
    this.web = axios.create({
      baseURL: APIWebRouteBases.api,
    });
  }

  public player(id: bigint): Promise<APIResponse<APIPlayer>> {
    return this.web.get<APIResponse<APIPlayer>>(APIWebRoutes.player(id))
      .then(response => response.data);
  }
}

async function requestPlayer(id: bigint): Promise<APIPlayer | null> {
  const api = new APIManager();
  const response = await api.player(id);
  return response.error === false ? response.response : null;
}

requestPlayer(BigInt(2)).then(data => console.log('Player data:', data));
```

Notice how we import a specific version of the API. This is not required. If the version is not specified,
the latest one will be used. However, keep in mind that new API versions may bring high impact changes.

## Support

If you have any questions about the library, you can create a topic on our
[forum](https://forum.truckersmp.com/index.php?/forum/198-developer-portal/).

## License

This package is open-source and is licensed under the [MIT license](LICENSE.md).
