
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model PortfolioHolding
 * 
 */
export type PortfolioHolding = $Result.DefaultSelection<Prisma.$PortfolioHoldingPayload>
/**
 * Model Ticker
 * 
 */
export type Ticker = $Result.DefaultSelection<Prisma.$TickerPayload>
/**
 * Model WatchlistItem
 * 
 */
export type WatchlistItem = $Result.DefaultSelection<Prisma.$WatchlistItemPayload>
/**
 * Model DailyPrice
 * 
 */
export type DailyPrice = $Result.DefaultSelection<Prisma.$DailyPricePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AuthMethod: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE'
};

export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod]


export const TokenType: {
  VERIFICATION: 'VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET',
  TWO_FACTOR: 'TWO_FACTOR'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const TickerType: {
  STOCK: 'STOCK',
  ETF: 'ETF',
  CRYPTO: 'CRYPTO',
  OTHER: 'OTHER'
};

export type TickerType = (typeof TickerType)[keyof typeof TickerType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AuthMethod = $Enums.AuthMethod

export const AuthMethod: typeof $Enums.AuthMethod

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type TickerType = $Enums.TickerType

export const TickerType: typeof $Enums.TickerType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioHolding`: Exposes CRUD operations for the **PortfolioHolding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioHoldings
    * const portfolioHoldings = await prisma.portfolioHolding.findMany()
    * ```
    */
  get portfolioHolding(): Prisma.PortfolioHoldingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticker`: Exposes CRUD operations for the **Ticker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickers
    * const tickers = await prisma.ticker.findMany()
    * ```
    */
  get ticker(): Prisma.TickerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlistItem`: Exposes CRUD operations for the **WatchlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchlistItems
    * const watchlistItems = await prisma.watchlistItem.findMany()
    * ```
    */
  get watchlistItem(): Prisma.WatchlistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyPrice`: Exposes CRUD operations for the **DailyPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyPrices
    * const dailyPrices = await prisma.dailyPrice.findMany()
    * ```
    */
  get dailyPrice(): Prisma.DailyPriceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Token: 'Token',
    Portfolio: 'Portfolio',
    PortfolioHolding: 'PortfolioHolding',
    Ticker: 'Ticker',
    WatchlistItem: 'WatchlistItem',
    DailyPrice: 'DailyPrice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "token" | "portfolio" | "portfolioHolding" | "ticker" | "watchlistItem" | "dailyPrice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      PortfolioHolding: {
        payload: Prisma.$PortfolioHoldingPayload<ExtArgs>
        fields: Prisma.PortfolioHoldingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioHoldingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioHoldingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>
          }
          findFirst: {
            args: Prisma.PortfolioHoldingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioHoldingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>
          }
          findMany: {
            args: Prisma.PortfolioHoldingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>[]
          }
          create: {
            args: Prisma.PortfolioHoldingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>
          }
          createMany: {
            args: Prisma.PortfolioHoldingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioHoldingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>[]
          }
          delete: {
            args: Prisma.PortfolioHoldingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>
          }
          update: {
            args: Prisma.PortfolioHoldingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioHoldingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioHoldingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioHoldingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioHoldingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioHoldingPayload>
          }
          aggregate: {
            args: Prisma.PortfolioHoldingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioHolding>
          }
          groupBy: {
            args: Prisma.PortfolioHoldingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioHoldingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioHoldingCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioHoldingCountAggregateOutputType> | number
          }
        }
      }
      Ticker: {
        payload: Prisma.$TickerPayload<ExtArgs>
        fields: Prisma.TickerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          findFirst: {
            args: Prisma.TickerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          findMany: {
            args: Prisma.TickerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>[]
          }
          create: {
            args: Prisma.TickerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          createMany: {
            args: Prisma.TickerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TickerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>[]
          }
          delete: {
            args: Prisma.TickerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          update: {
            args: Prisma.TickerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          deleteMany: {
            args: Prisma.TickerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TickerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TickerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>[]
          }
          upsert: {
            args: Prisma.TickerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickerPayload>
          }
          aggregate: {
            args: Prisma.TickerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicker>
          }
          groupBy: {
            args: Prisma.TickerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TickerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TickerCountArgs<ExtArgs>
            result: $Utils.Optional<TickerCountAggregateOutputType> | number
          }
        }
      }
      WatchlistItem: {
        payload: Prisma.$WatchlistItemPayload<ExtArgs>
        fields: Prisma.WatchlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findFirst: {
            args: Prisma.WatchlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findMany: {
            args: Prisma.WatchlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          create: {
            args: Prisma.WatchlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          createMany: {
            args: Prisma.WatchlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          delete: {
            args: Prisma.WatchlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          update: {
            args: Prisma.WatchlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          aggregate: {
            args: Prisma.WatchlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlistItem>
          }
          groupBy: {
            args: Prisma.WatchlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemCountAggregateOutputType> | number
          }
        }
      }
      DailyPrice: {
        payload: Prisma.$DailyPricePayload<ExtArgs>
        fields: Prisma.DailyPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          findFirst: {
            args: Prisma.DailyPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          findMany: {
            args: Prisma.DailyPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>[]
          }
          create: {
            args: Prisma.DailyPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          createMany: {
            args: Prisma.DailyPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>[]
          }
          delete: {
            args: Prisma.DailyPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          update: {
            args: Prisma.DailyPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          deleteMany: {
            args: Prisma.DailyPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>[]
          }
          upsert: {
            args: Prisma.DailyPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          aggregate: {
            args: Prisma.DailyPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyPrice>
          }
          groupBy: {
            args: Prisma.DailyPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyPriceCountArgs<ExtArgs>
            result: $Utils.Optional<DailyPriceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    token?: TokenOmit
    portfolio?: PortfolioOmit
    portfolioHolding?: PortfolioHoldingOmit
    ticker?: TickerOmit
    watchlistItem?: WatchlistItemOmit
    dailyPrice?: DailyPriceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    portfolios: number
    watchlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    portfolios?: boolean | UserCountOutputTypeCountPortfoliosArgs
    watchlist?: boolean | UserCountOutputTypeCountWatchlistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPortfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }


  /**
   * Count Type PortfolioCountOutputType
   */

  export type PortfolioCountOutputType = {
    holdings: number
  }

  export type PortfolioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | PortfolioCountOutputTypeCountHoldingsArgs
  }

  // Custom InputTypes
  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCountOutputType
     */
    select?: PortfolioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioHoldingWhereInput
  }


  /**
   * Count Type TickerCountOutputType
   */

  export type TickerCountOutputType = {
    holdings: number
    watchlist: number
    dailyPrices: number
  }

  export type TickerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | TickerCountOutputTypeCountHoldingsArgs
    watchlist?: boolean | TickerCountOutputTypeCountWatchlistArgs
    dailyPrices?: boolean | TickerCountOutputTypeCountDailyPricesArgs
  }

  // Custom InputTypes
  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TickerCountOutputType
     */
    select?: TickerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioHoldingWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }

  /**
   * TickerCountOutputType without action
   */
  export type TickerCountOutputTypeCountDailyPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPriceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    name: string | null
    picture: string | null
    verified: boolean | null
    twoFactorEnabled: boolean | null
    authMethod: $Enums.AuthMethod | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    name: string | null
    picture: string | null
    verified: boolean | null
    twoFactorEnabled: boolean | null
    authMethod: $Enums.AuthMethod | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    name: number
    picture: number
    verified: number
    twoFactorEnabled: number
    authMethod: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    name?: true
    picture?: true
    verified?: true
    twoFactorEnabled?: true
    authMethod?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    name?: true
    picture?: true
    verified?: true
    twoFactorEnabled?: true
    authMethod?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    name?: true
    picture?: true
    verified?: true
    twoFactorEnabled?: true
    authMethod?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    name: string
    picture: string | null
    verified: boolean
    twoFactorEnabled: boolean
    authMethod: $Enums.AuthMethod
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    name?: boolean
    picture?: boolean
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    portfolios?: boolean | User$portfoliosArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    name?: boolean
    picture?: boolean
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    name?: boolean
    picture?: boolean
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    name?: boolean
    picture?: boolean
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt" | "role" | "name" | "picture" | "verified" | "twoFactorEnabled" | "authMethod", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    portfolios?: boolean | User$portfoliosArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      portfolios: Prisma.$PortfolioPayload<ExtArgs>[]
      watchlist: Prisma.$WatchlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      name: string
      picture: string | null
      verified: boolean
      twoFactorEnabled: boolean
      authMethod: $Enums.AuthMethod
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolios<T extends User$portfoliosArgs<ExtArgs> = {}>(args?: Subset<T, User$portfoliosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlist<T extends User$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly authMethod: FieldRef<"User", 'AuthMethod'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.portfolios
   */
  export type User$portfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    cursor?: PortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * User.watchlist
   */
  export type User$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    expiresAt: number | null
  }

  export type SessionSumAggregateOutputType = {
    expiresAt: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    type: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    type: number
    provider: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    expiresAt?: true
  }

  export type SessionSumAggregateInputType = {
    expiresAt?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    type?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "provider" | "accessToken" | "refreshToken" | "expiresAt" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      provider: string
      accessToken: string
      refreshToken: string
      expiresAt: number
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly type: FieldRef<"Session", 'String'>
    readonly provider: FieldRef<"Session", 'String'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly refreshToken: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    type: $Enums.TokenType | null
    token: string | null
    expiresIn: Date | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    type: $Enums.TokenType | null
    token: string | null
    expiresIn: Date | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    email: number
    type: number
    token: number
    expiresIn: number
    createdAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    email?: true
    type?: true
    token?: true
    expiresIn?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    email?: true
    type?: true
    token?: true
    expiresIn?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    email?: true
    type?: true
    token?: true
    expiresIn?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    email: string
    type: $Enums.TokenType
    token: string
    expiresIn: Date
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    type?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    type?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    type?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    email?: boolean
    type?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "type" | "token" | "expiresIn" | "createdAt", ExtArgs["result"]["token"]>

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      type: $Enums.TokenType
      token: string
      expiresIn: Date
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly email: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly token: FieldRef<"Token", 'String'>
    readonly expiresIn: FieldRef<"Token", 'DateTime'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
  }


  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PortfolioMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PortfolioCountAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    holdings?: boolean | Portfolio$holdingsArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    holdings?: boolean | Portfolio$holdingsArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      holdings: Prisma.$PortfolioHoldingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {PortfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    holdings<T extends Portfolio$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Portfolio model
   */
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'String'>
    readonly name: FieldRef<"Portfolio", 'String'>
    readonly createdAt: FieldRef<"Portfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portfolio", 'DateTime'>
    readonly userId: FieldRef<"Portfolio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio updateManyAndReturn
   */
  export type PortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio.holdings
   */
  export type Portfolio$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    where?: PortfolioHoldingWhereInput
    orderBy?: PortfolioHoldingOrderByWithRelationInput | PortfolioHoldingOrderByWithRelationInput[]
    cursor?: PortfolioHoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioHoldingScalarFieldEnum | PortfolioHoldingScalarFieldEnum[]
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioHolding
   */

  export type AggregatePortfolioHolding = {
    _count: PortfolioHoldingCountAggregateOutputType | null
    _avg: PortfolioHoldingAvgAggregateOutputType | null
    _sum: PortfolioHoldingSumAggregateOutputType | null
    _min: PortfolioHoldingMinAggregateOutputType | null
    _max: PortfolioHoldingMaxAggregateOutputType | null
  }

  export type PortfolioHoldingAvgAggregateOutputType = {
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
  }

  export type PortfolioHoldingSumAggregateOutputType = {
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
  }

  export type PortfolioHoldingMinAggregateOutputType = {
    id: string | null
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
    purchasedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    portfolioId: string | null
    tickerId: string | null
  }

  export type PortfolioHoldingMaxAggregateOutputType = {
    id: string | null
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
    purchasedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    portfolioId: string | null
    tickerId: string | null
  }

  export type PortfolioHoldingCountAggregateOutputType = {
    id: number
    quantity: number
    avgBuyPrice: number
    purchasedAt: number
    createdAt: number
    updatedAt: number
    portfolioId: number
    tickerId: number
    _all: number
  }


  export type PortfolioHoldingAvgAggregateInputType = {
    quantity?: true
    avgBuyPrice?: true
  }

  export type PortfolioHoldingSumAggregateInputType = {
    quantity?: true
    avgBuyPrice?: true
  }

  export type PortfolioHoldingMinAggregateInputType = {
    id?: true
    quantity?: true
    avgBuyPrice?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
    portfolioId?: true
    tickerId?: true
  }

  export type PortfolioHoldingMaxAggregateInputType = {
    id?: true
    quantity?: true
    avgBuyPrice?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
    portfolioId?: true
    tickerId?: true
  }

  export type PortfolioHoldingCountAggregateInputType = {
    id?: true
    quantity?: true
    avgBuyPrice?: true
    purchasedAt?: true
    createdAt?: true
    updatedAt?: true
    portfolioId?: true
    tickerId?: true
    _all?: true
  }

  export type PortfolioHoldingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioHolding to aggregate.
     */
    where?: PortfolioHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioHoldings to fetch.
     */
    orderBy?: PortfolioHoldingOrderByWithRelationInput | PortfolioHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioHoldings
    **/
    _count?: true | PortfolioHoldingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioHoldingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioHoldingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioHoldingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioHoldingMaxAggregateInputType
  }

  export type GetPortfolioHoldingAggregateType<T extends PortfolioHoldingAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioHolding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioHolding[P]>
      : GetScalarType<T[P], AggregatePortfolioHolding[P]>
  }




  export type PortfolioHoldingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioHoldingWhereInput
    orderBy?: PortfolioHoldingOrderByWithAggregationInput | PortfolioHoldingOrderByWithAggregationInput[]
    by: PortfolioHoldingScalarFieldEnum[] | PortfolioHoldingScalarFieldEnum
    having?: PortfolioHoldingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioHoldingCountAggregateInputType | true
    _avg?: PortfolioHoldingAvgAggregateInputType
    _sum?: PortfolioHoldingSumAggregateInputType
    _min?: PortfolioHoldingMinAggregateInputType
    _max?: PortfolioHoldingMaxAggregateInputType
  }

  export type PortfolioHoldingGroupByOutputType = {
    id: string
    quantity: Decimal
    avgBuyPrice: Decimal
    purchasedAt: Date
    createdAt: Date
    updatedAt: Date
    portfolioId: string
    tickerId: string
    _count: PortfolioHoldingCountAggregateOutputType | null
    _avg: PortfolioHoldingAvgAggregateOutputType | null
    _sum: PortfolioHoldingSumAggregateOutputType | null
    _min: PortfolioHoldingMinAggregateOutputType | null
    _max: PortfolioHoldingMaxAggregateOutputType | null
  }

  type GetPortfolioHoldingGroupByPayload<T extends PortfolioHoldingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioHoldingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioHoldingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioHoldingGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioHoldingGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioHoldingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioId?: boolean
    tickerId?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioHolding"]>

  export type PortfolioHoldingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioId?: boolean
    tickerId?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioHolding"]>

  export type PortfolioHoldingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioId?: boolean
    tickerId?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioHolding"]>

  export type PortfolioHoldingSelectScalar = {
    id?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    purchasedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioId?: boolean
    tickerId?: boolean
  }

  export type PortfolioHoldingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "avgBuyPrice" | "purchasedAt" | "createdAt" | "updatedAt" | "portfolioId" | "tickerId", ExtArgs["result"]["portfolioHolding"]>
  export type PortfolioHoldingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }
  export type PortfolioHoldingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }
  export type PortfolioHoldingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $PortfolioHoldingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioHolding"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
      ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: Prisma.Decimal
      avgBuyPrice: Prisma.Decimal
      purchasedAt: Date
      createdAt: Date
      updatedAt: Date
      portfolioId: string
      tickerId: string
    }, ExtArgs["result"]["portfolioHolding"]>
    composites: {}
  }

  type PortfolioHoldingGetPayload<S extends boolean | null | undefined | PortfolioHoldingDefaultArgs> = $Result.GetResult<Prisma.$PortfolioHoldingPayload, S>

  type PortfolioHoldingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioHoldingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioHoldingCountAggregateInputType | true
    }

  export interface PortfolioHoldingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioHolding'], meta: { name: 'PortfolioHolding' } }
    /**
     * Find zero or one PortfolioHolding that matches the filter.
     * @param {PortfolioHoldingFindUniqueArgs} args - Arguments to find a PortfolioHolding
     * @example
     * // Get one PortfolioHolding
     * const portfolioHolding = await prisma.portfolioHolding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioHoldingFindUniqueArgs>(args: SelectSubset<T, PortfolioHoldingFindUniqueArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortfolioHolding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioHoldingFindUniqueOrThrowArgs} args - Arguments to find a PortfolioHolding
     * @example
     * // Get one PortfolioHolding
     * const portfolioHolding = await prisma.portfolioHolding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioHoldingFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioHoldingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioHolding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingFindFirstArgs} args - Arguments to find a PortfolioHolding
     * @example
     * // Get one PortfolioHolding
     * const portfolioHolding = await prisma.portfolioHolding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioHoldingFindFirstArgs>(args?: SelectSubset<T, PortfolioHoldingFindFirstArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioHolding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingFindFirstOrThrowArgs} args - Arguments to find a PortfolioHolding
     * @example
     * // Get one PortfolioHolding
     * const portfolioHolding = await prisma.portfolioHolding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioHoldingFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioHoldingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortfolioHoldings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioHoldings
     * const portfolioHoldings = await prisma.portfolioHolding.findMany()
     * 
     * // Get first 10 PortfolioHoldings
     * const portfolioHoldings = await prisma.portfolioHolding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioHoldingWithIdOnly = await prisma.portfolioHolding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioHoldingFindManyArgs>(args?: SelectSubset<T, PortfolioHoldingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortfolioHolding.
     * @param {PortfolioHoldingCreateArgs} args - Arguments to create a PortfolioHolding.
     * @example
     * // Create one PortfolioHolding
     * const PortfolioHolding = await prisma.portfolioHolding.create({
     *   data: {
     *     // ... data to create a PortfolioHolding
     *   }
     * })
     * 
     */
    create<T extends PortfolioHoldingCreateArgs>(args: SelectSubset<T, PortfolioHoldingCreateArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortfolioHoldings.
     * @param {PortfolioHoldingCreateManyArgs} args - Arguments to create many PortfolioHoldings.
     * @example
     * // Create many PortfolioHoldings
     * const portfolioHolding = await prisma.portfolioHolding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioHoldingCreateManyArgs>(args?: SelectSubset<T, PortfolioHoldingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioHoldings and returns the data saved in the database.
     * @param {PortfolioHoldingCreateManyAndReturnArgs} args - Arguments to create many PortfolioHoldings.
     * @example
     * // Create many PortfolioHoldings
     * const portfolioHolding = await prisma.portfolioHolding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioHoldings and only return the `id`
     * const portfolioHoldingWithIdOnly = await prisma.portfolioHolding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioHoldingCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioHoldingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortfolioHolding.
     * @param {PortfolioHoldingDeleteArgs} args - Arguments to delete one PortfolioHolding.
     * @example
     * // Delete one PortfolioHolding
     * const PortfolioHolding = await prisma.portfolioHolding.delete({
     *   where: {
     *     // ... filter to delete one PortfolioHolding
     *   }
     * })
     * 
     */
    delete<T extends PortfolioHoldingDeleteArgs>(args: SelectSubset<T, PortfolioHoldingDeleteArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortfolioHolding.
     * @param {PortfolioHoldingUpdateArgs} args - Arguments to update one PortfolioHolding.
     * @example
     * // Update one PortfolioHolding
     * const portfolioHolding = await prisma.portfolioHolding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioHoldingUpdateArgs>(args: SelectSubset<T, PortfolioHoldingUpdateArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortfolioHoldings.
     * @param {PortfolioHoldingDeleteManyArgs} args - Arguments to filter PortfolioHoldings to delete.
     * @example
     * // Delete a few PortfolioHoldings
     * const { count } = await prisma.portfolioHolding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioHoldingDeleteManyArgs>(args?: SelectSubset<T, PortfolioHoldingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioHoldings
     * const portfolioHolding = await prisma.portfolioHolding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioHoldingUpdateManyArgs>(args: SelectSubset<T, PortfolioHoldingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioHoldings and returns the data updated in the database.
     * @param {PortfolioHoldingUpdateManyAndReturnArgs} args - Arguments to update many PortfolioHoldings.
     * @example
     * // Update many PortfolioHoldings
     * const portfolioHolding = await prisma.portfolioHolding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioHoldings and only return the `id`
     * const portfolioHoldingWithIdOnly = await prisma.portfolioHolding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioHoldingUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioHoldingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortfolioHolding.
     * @param {PortfolioHoldingUpsertArgs} args - Arguments to update or create a PortfolioHolding.
     * @example
     * // Update or create a PortfolioHolding
     * const portfolioHolding = await prisma.portfolioHolding.upsert({
     *   create: {
     *     // ... data to create a PortfolioHolding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioHolding we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioHoldingUpsertArgs>(args: SelectSubset<T, PortfolioHoldingUpsertArgs<ExtArgs>>): Prisma__PortfolioHoldingClient<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortfolioHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingCountArgs} args - Arguments to filter PortfolioHoldings to count.
     * @example
     * // Count the number of PortfolioHoldings
     * const count = await prisma.portfolioHolding.count({
     *   where: {
     *     // ... the filter for the PortfolioHoldings we want to count
     *   }
     * })
    **/
    count<T extends PortfolioHoldingCountArgs>(
      args?: Subset<T, PortfolioHoldingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioHoldingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioHoldingAggregateArgs>(args: Subset<T, PortfolioHoldingAggregateArgs>): Prisma.PrismaPromise<GetPortfolioHoldingAggregateType<T>>

    /**
     * Group by PortfolioHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioHoldingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioHoldingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioHoldingGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioHoldingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioHoldingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioHoldingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioHolding model
   */
  readonly fields: PortfolioHoldingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioHolding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioHoldingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioHolding model
   */
  interface PortfolioHoldingFieldRefs {
    readonly id: FieldRef<"PortfolioHolding", 'String'>
    readonly quantity: FieldRef<"PortfolioHolding", 'Decimal'>
    readonly avgBuyPrice: FieldRef<"PortfolioHolding", 'Decimal'>
    readonly purchasedAt: FieldRef<"PortfolioHolding", 'DateTime'>
    readonly createdAt: FieldRef<"PortfolioHolding", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioHolding", 'DateTime'>
    readonly portfolioId: FieldRef<"PortfolioHolding", 'String'>
    readonly tickerId: FieldRef<"PortfolioHolding", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioHolding findUnique
   */
  export type PortfolioHoldingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioHolding to fetch.
     */
    where: PortfolioHoldingWhereUniqueInput
  }

  /**
   * PortfolioHolding findUniqueOrThrow
   */
  export type PortfolioHoldingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioHolding to fetch.
     */
    where: PortfolioHoldingWhereUniqueInput
  }

  /**
   * PortfolioHolding findFirst
   */
  export type PortfolioHoldingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioHolding to fetch.
     */
    where?: PortfolioHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioHoldings to fetch.
     */
    orderBy?: PortfolioHoldingOrderByWithRelationInput | PortfolioHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioHoldings.
     */
    cursor?: PortfolioHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioHoldings.
     */
    distinct?: PortfolioHoldingScalarFieldEnum | PortfolioHoldingScalarFieldEnum[]
  }

  /**
   * PortfolioHolding findFirstOrThrow
   */
  export type PortfolioHoldingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioHolding to fetch.
     */
    where?: PortfolioHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioHoldings to fetch.
     */
    orderBy?: PortfolioHoldingOrderByWithRelationInput | PortfolioHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioHoldings.
     */
    cursor?: PortfolioHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioHoldings.
     */
    distinct?: PortfolioHoldingScalarFieldEnum | PortfolioHoldingScalarFieldEnum[]
  }

  /**
   * PortfolioHolding findMany
   */
  export type PortfolioHoldingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioHoldings to fetch.
     */
    where?: PortfolioHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioHoldings to fetch.
     */
    orderBy?: PortfolioHoldingOrderByWithRelationInput | PortfolioHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioHoldings.
     */
    cursor?: PortfolioHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioHoldings.
     */
    skip?: number
    distinct?: PortfolioHoldingScalarFieldEnum | PortfolioHoldingScalarFieldEnum[]
  }

  /**
   * PortfolioHolding create
   */
  export type PortfolioHoldingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioHolding.
     */
    data: XOR<PortfolioHoldingCreateInput, PortfolioHoldingUncheckedCreateInput>
  }

  /**
   * PortfolioHolding createMany
   */
  export type PortfolioHoldingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioHoldings.
     */
    data: PortfolioHoldingCreateManyInput | PortfolioHoldingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioHolding createManyAndReturn
   */
  export type PortfolioHoldingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioHoldings.
     */
    data: PortfolioHoldingCreateManyInput | PortfolioHoldingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioHolding update
   */
  export type PortfolioHoldingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioHolding.
     */
    data: XOR<PortfolioHoldingUpdateInput, PortfolioHoldingUncheckedUpdateInput>
    /**
     * Choose, which PortfolioHolding to update.
     */
    where: PortfolioHoldingWhereUniqueInput
  }

  /**
   * PortfolioHolding updateMany
   */
  export type PortfolioHoldingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioHoldings.
     */
    data: XOR<PortfolioHoldingUpdateManyMutationInput, PortfolioHoldingUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioHoldings to update
     */
    where?: PortfolioHoldingWhereInput
    /**
     * Limit how many PortfolioHoldings to update.
     */
    limit?: number
  }

  /**
   * PortfolioHolding updateManyAndReturn
   */
  export type PortfolioHoldingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioHoldings.
     */
    data: XOR<PortfolioHoldingUpdateManyMutationInput, PortfolioHoldingUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioHoldings to update
     */
    where?: PortfolioHoldingWhereInput
    /**
     * Limit how many PortfolioHoldings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioHolding upsert
   */
  export type PortfolioHoldingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioHolding to update in case it exists.
     */
    where: PortfolioHoldingWhereUniqueInput
    /**
     * In case the PortfolioHolding found by the `where` argument doesn't exist, create a new PortfolioHolding with this data.
     */
    create: XOR<PortfolioHoldingCreateInput, PortfolioHoldingUncheckedCreateInput>
    /**
     * In case the PortfolioHolding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioHoldingUpdateInput, PortfolioHoldingUncheckedUpdateInput>
  }

  /**
   * PortfolioHolding delete
   */
  export type PortfolioHoldingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    /**
     * Filter which PortfolioHolding to delete.
     */
    where: PortfolioHoldingWhereUniqueInput
  }

  /**
   * PortfolioHolding deleteMany
   */
  export type PortfolioHoldingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioHoldings to delete
     */
    where?: PortfolioHoldingWhereInput
    /**
     * Limit how many PortfolioHoldings to delete.
     */
    limit?: number
  }

  /**
   * PortfolioHolding without action
   */
  export type PortfolioHoldingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
  }


  /**
   * Model Ticker
   */

  export type AggregateTicker = {
    _count: TickerCountAggregateOutputType | null
    _min: TickerMinAggregateOutputType | null
    _max: TickerMaxAggregateOutputType | null
  }

  export type TickerMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    type: $Enums.TickerType | null
    exchange: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TickerMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    type: $Enums.TickerType | null
    exchange: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TickerCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    type: number
    exchange: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TickerMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    type?: true
    exchange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TickerMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    type?: true
    exchange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TickerCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    type?: true
    exchange?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TickerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticker to aggregate.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickers
    **/
    _count?: true | TickerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickerMaxAggregateInputType
  }

  export type GetTickerAggregateType<T extends TickerAggregateArgs> = {
        [P in keyof T & keyof AggregateTicker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicker[P]>
      : GetScalarType<T[P], AggregateTicker[P]>
  }




  export type TickerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TickerWhereInput
    orderBy?: TickerOrderByWithAggregationInput | TickerOrderByWithAggregationInput[]
    by: TickerScalarFieldEnum[] | TickerScalarFieldEnum
    having?: TickerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickerCountAggregateInputType | true
    _min?: TickerMinAggregateInputType
    _max?: TickerMaxAggregateInputType
  }

  export type TickerGroupByOutputType = {
    id: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange: string | null
    createdAt: Date
    updatedAt: Date
    _count: TickerCountAggregateOutputType | null
    _min: TickerMinAggregateOutputType | null
    _max: TickerMaxAggregateOutputType | null
  }

  type GetTickerGroupByPayload<T extends TickerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickerGroupByOutputType[P]>
            : GetScalarType<T[P], TickerGroupByOutputType[P]>
        }
      >
    >


  export type TickerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    exchange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    holdings?: boolean | Ticker$holdingsArgs<ExtArgs>
    watchlist?: boolean | Ticker$watchlistArgs<ExtArgs>
    dailyPrices?: boolean | Ticker$dailyPricesArgs<ExtArgs>
    _count?: boolean | TickerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticker"]>

  export type TickerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    exchange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticker"]>

  export type TickerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    exchange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ticker"]>

  export type TickerSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    exchange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TickerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "type" | "exchange" | "createdAt" | "updatedAt", ExtArgs["result"]["ticker"]>
  export type TickerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | Ticker$holdingsArgs<ExtArgs>
    watchlist?: boolean | Ticker$watchlistArgs<ExtArgs>
    dailyPrices?: boolean | Ticker$dailyPricesArgs<ExtArgs>
    _count?: boolean | TickerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TickerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TickerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TickerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticker"
    objects: {
      holdings: Prisma.$PortfolioHoldingPayload<ExtArgs>[]
      watchlist: Prisma.$WatchlistItemPayload<ExtArgs>[]
      dailyPrices: Prisma.$DailyPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      name: string
      type: $Enums.TickerType
      exchange: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticker"]>
    composites: {}
  }

  type TickerGetPayload<S extends boolean | null | undefined | TickerDefaultArgs> = $Result.GetResult<Prisma.$TickerPayload, S>

  type TickerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TickerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TickerCountAggregateInputType | true
    }

  export interface TickerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticker'], meta: { name: 'Ticker' } }
    /**
     * Find zero or one Ticker that matches the filter.
     * @param {TickerFindUniqueArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TickerFindUniqueArgs>(args: SelectSubset<T, TickerFindUniqueArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TickerFindUniqueOrThrowArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TickerFindUniqueOrThrowArgs>(args: SelectSubset<T, TickerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindFirstArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TickerFindFirstArgs>(args?: SelectSubset<T, TickerFindFirstArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindFirstOrThrowArgs} args - Arguments to find a Ticker
     * @example
     * // Get one Ticker
     * const ticker = await prisma.ticker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TickerFindFirstOrThrowArgs>(args?: SelectSubset<T, TickerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickers
     * const tickers = await prisma.ticker.findMany()
     * 
     * // Get first 10 Tickers
     * const tickers = await prisma.ticker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tickerWithIdOnly = await prisma.ticker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TickerFindManyArgs>(args?: SelectSubset<T, TickerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticker.
     * @param {TickerCreateArgs} args - Arguments to create a Ticker.
     * @example
     * // Create one Ticker
     * const Ticker = await prisma.ticker.create({
     *   data: {
     *     // ... data to create a Ticker
     *   }
     * })
     * 
     */
    create<T extends TickerCreateArgs>(args: SelectSubset<T, TickerCreateArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickers.
     * @param {TickerCreateManyArgs} args - Arguments to create many Tickers.
     * @example
     * // Create many Tickers
     * const ticker = await prisma.ticker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TickerCreateManyArgs>(args?: SelectSubset<T, TickerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickers and returns the data saved in the database.
     * @param {TickerCreateManyAndReturnArgs} args - Arguments to create many Tickers.
     * @example
     * // Create many Tickers
     * const ticker = await prisma.ticker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickers and only return the `id`
     * const tickerWithIdOnly = await prisma.ticker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TickerCreateManyAndReturnArgs>(args?: SelectSubset<T, TickerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticker.
     * @param {TickerDeleteArgs} args - Arguments to delete one Ticker.
     * @example
     * // Delete one Ticker
     * const Ticker = await prisma.ticker.delete({
     *   where: {
     *     // ... filter to delete one Ticker
     *   }
     * })
     * 
     */
    delete<T extends TickerDeleteArgs>(args: SelectSubset<T, TickerDeleteArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticker.
     * @param {TickerUpdateArgs} args - Arguments to update one Ticker.
     * @example
     * // Update one Ticker
     * const ticker = await prisma.ticker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TickerUpdateArgs>(args: SelectSubset<T, TickerUpdateArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickers.
     * @param {TickerDeleteManyArgs} args - Arguments to filter Tickers to delete.
     * @example
     * // Delete a few Tickers
     * const { count } = await prisma.ticker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TickerDeleteManyArgs>(args?: SelectSubset<T, TickerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickers
     * const ticker = await prisma.ticker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TickerUpdateManyArgs>(args: SelectSubset<T, TickerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickers and returns the data updated in the database.
     * @param {TickerUpdateManyAndReturnArgs} args - Arguments to update many Tickers.
     * @example
     * // Update many Tickers
     * const ticker = await prisma.ticker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickers and only return the `id`
     * const tickerWithIdOnly = await prisma.ticker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TickerUpdateManyAndReturnArgs>(args: SelectSubset<T, TickerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticker.
     * @param {TickerUpsertArgs} args - Arguments to update or create a Ticker.
     * @example
     * // Update or create a Ticker
     * const ticker = await prisma.ticker.upsert({
     *   create: {
     *     // ... data to create a Ticker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticker we want to update
     *   }
     * })
     */
    upsert<T extends TickerUpsertArgs>(args: SelectSubset<T, TickerUpsertArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerCountArgs} args - Arguments to filter Tickers to count.
     * @example
     * // Count the number of Tickers
     * const count = await prisma.ticker.count({
     *   where: {
     *     // ... the filter for the Tickers we want to count
     *   }
     * })
    **/
    count<T extends TickerCountArgs>(
      args?: Subset<T, TickerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TickerAggregateArgs>(args: Subset<T, TickerAggregateArgs>): Prisma.PrismaPromise<GetTickerAggregateType<T>>

    /**
     * Group by Ticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TickerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickerGroupByArgs['orderBy'] }
        : { orderBy?: TickerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TickerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticker model
   */
  readonly fields: TickerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    holdings<T extends Ticker$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlist<T extends Ticker$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyPrices<T extends Ticker$dailyPricesArgs<ExtArgs> = {}>(args?: Subset<T, Ticker$dailyPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticker model
   */
  interface TickerFieldRefs {
    readonly id: FieldRef<"Ticker", 'String'>
    readonly symbol: FieldRef<"Ticker", 'String'>
    readonly name: FieldRef<"Ticker", 'String'>
    readonly type: FieldRef<"Ticker", 'TickerType'>
    readonly exchange: FieldRef<"Ticker", 'String'>
    readonly createdAt: FieldRef<"Ticker", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticker findUnique
   */
  export type TickerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker findUniqueOrThrow
   */
  export type TickerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker findFirst
   */
  export type TickerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }

  /**
   * Ticker findFirstOrThrow
   */
  export type TickerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Ticker to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }

  /**
   * Ticker findMany
   */
  export type TickerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where?: TickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickerOrderByWithRelationInput | TickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickers.
     */
    cursor?: TickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    distinct?: TickerScalarFieldEnum | TickerScalarFieldEnum[]
  }

  /**
   * Ticker create
   */
  export type TickerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticker.
     */
    data: XOR<TickerCreateInput, TickerUncheckedCreateInput>
  }

  /**
   * Ticker createMany
   */
  export type TickerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickers.
     */
    data: TickerCreateManyInput | TickerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticker createManyAndReturn
   */
  export type TickerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * The data used to create many Tickers.
     */
    data: TickerCreateManyInput | TickerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticker update
   */
  export type TickerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticker.
     */
    data: XOR<TickerUpdateInput, TickerUncheckedUpdateInput>
    /**
     * Choose, which Ticker to update.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker updateMany
   */
  export type TickerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickers.
     */
    data: XOR<TickerUpdateManyMutationInput, TickerUncheckedUpdateManyInput>
    /**
     * Filter which Tickers to update
     */
    where?: TickerWhereInput
    /**
     * Limit how many Tickers to update.
     */
    limit?: number
  }

  /**
   * Ticker updateManyAndReturn
   */
  export type TickerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * The data used to update Tickers.
     */
    data: XOR<TickerUpdateManyMutationInput, TickerUncheckedUpdateManyInput>
    /**
     * Filter which Tickers to update
     */
    where?: TickerWhereInput
    /**
     * Limit how many Tickers to update.
     */
    limit?: number
  }

  /**
   * Ticker upsert
   */
  export type TickerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticker to update in case it exists.
     */
    where: TickerWhereUniqueInput
    /**
     * In case the Ticker found by the `where` argument doesn't exist, create a new Ticker with this data.
     */
    create: XOR<TickerCreateInput, TickerUncheckedCreateInput>
    /**
     * In case the Ticker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickerUpdateInput, TickerUncheckedUpdateInput>
  }

  /**
   * Ticker delete
   */
  export type TickerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
    /**
     * Filter which Ticker to delete.
     */
    where: TickerWhereUniqueInput
  }

  /**
   * Ticker deleteMany
   */
  export type TickerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickers to delete
     */
    where?: TickerWhereInput
    /**
     * Limit how many Tickers to delete.
     */
    limit?: number
  }

  /**
   * Ticker.holdings
   */
  export type Ticker$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioHolding
     */
    select?: PortfolioHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioHolding
     */
    omit?: PortfolioHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioHoldingInclude<ExtArgs> | null
    where?: PortfolioHoldingWhereInput
    orderBy?: PortfolioHoldingOrderByWithRelationInput | PortfolioHoldingOrderByWithRelationInput[]
    cursor?: PortfolioHoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioHoldingScalarFieldEnum | PortfolioHoldingScalarFieldEnum[]
  }

  /**
   * Ticker.watchlist
   */
  export type Ticker$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * Ticker.dailyPrices
   */
  export type Ticker$dailyPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    where?: DailyPriceWhereInput
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    cursor?: DailyPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * Ticker without action
   */
  export type TickerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticker
     */
    select?: TickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticker
     */
    omit?: TickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TickerInclude<ExtArgs> | null
  }


  /**
   * Model WatchlistItem
   */

  export type AggregateWatchlistItem = {
    _count: WatchlistItemCountAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  export type WatchlistItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    tickerId: string | null
  }

  export type WatchlistItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    tickerId: string | null
  }

  export type WatchlistItemCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    tickerId: number
    _all: number
  }


  export type WatchlistItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    tickerId?: true
  }

  export type WatchlistItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    tickerId?: true
  }

  export type WatchlistItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    tickerId?: true
    _all?: true
  }

  export type WatchlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItem to aggregate.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchlistItems
    **/
    _count?: true | WatchlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type GetWatchlistItemAggregateType<T extends WatchlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlistItem[P]>
      : GetScalarType<T[P], AggregateWatchlistItem[P]>
  }




  export type WatchlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithAggregationInput | WatchlistItemOrderByWithAggregationInput[]
    by: WatchlistItemScalarFieldEnum[] | WatchlistItemScalarFieldEnum
    having?: WatchlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistItemCountAggregateInputType | true
    _min?: WatchlistItemMinAggregateInputType
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type WatchlistItemGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    tickerId: string
    _count: WatchlistItemCountAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  type GetWatchlistItemGroupByPayload<T extends WatchlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tickerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tickerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tickerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tickerId?: boolean
  }

  export type WatchlistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "tickerId", ExtArgs["result"]["watchlistItem"]>
  export type WatchlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $WatchlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchlistItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      tickerId: string
    }, ExtArgs["result"]["watchlistItem"]>
    composites: {}
  }

  type WatchlistItemGetPayload<S extends boolean | null | undefined | WatchlistItemDefaultArgs> = $Result.GetResult<Prisma.$WatchlistItemPayload, S>

  type WatchlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistItemCountAggregateInputType | true
    }

  export interface WatchlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchlistItem'], meta: { name: 'WatchlistItem' } }
    /**
     * Find zero or one WatchlistItem that matches the filter.
     * @param {WatchlistItemFindUniqueArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistItemFindUniqueArgs>(args: SelectSubset<T, WatchlistItemFindUniqueArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchlistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistItemFindUniqueOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistItemFindFirstArgs>(args?: SelectSubset<T, WatchlistItemFindFirstArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany()
     * 
     * // Get first 10 WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistItemFindManyArgs>(args?: SelectSubset<T, WatchlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchlistItem.
     * @param {WatchlistItemCreateArgs} args - Arguments to create a WatchlistItem.
     * @example
     * // Create one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.create({
     *   data: {
     *     // ... data to create a WatchlistItem
     *   }
     * })
     * 
     */
    create<T extends WatchlistItemCreateArgs>(args: SelectSubset<T, WatchlistItemCreateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchlistItems.
     * @param {WatchlistItemCreateManyArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistItemCreateManyArgs>(args?: SelectSubset<T, WatchlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchlistItems and returns the data saved in the database.
     * @param {WatchlistItemCreateManyAndReturnArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchlistItem.
     * @param {WatchlistItemDeleteArgs} args - Arguments to delete one WatchlistItem.
     * @example
     * // Delete one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.delete({
     *   where: {
     *     // ... filter to delete one WatchlistItem
     *   }
     * })
     * 
     */
    delete<T extends WatchlistItemDeleteArgs>(args: SelectSubset<T, WatchlistItemDeleteArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchlistItem.
     * @param {WatchlistItemUpdateArgs} args - Arguments to update one WatchlistItem.
     * @example
     * // Update one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistItemUpdateArgs>(args: SelectSubset<T, WatchlistItemUpdateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchlistItems.
     * @param {WatchlistItemDeleteManyArgs} args - Arguments to filter WatchlistItems to delete.
     * @example
     * // Delete a few WatchlistItems
     * const { count } = await prisma.watchlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistItemDeleteManyArgs>(args?: SelectSubset<T, WatchlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistItemUpdateManyArgs>(args: SelectSubset<T, WatchlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems and returns the data updated in the database.
     * @param {WatchlistItemUpdateManyAndReturnArgs} args - Arguments to update many WatchlistItems.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchlistItem.
     * @param {WatchlistItemUpsertArgs} args - Arguments to update or create a WatchlistItem.
     * @example
     * // Update or create a WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.upsert({
     *   create: {
     *     // ... data to create a WatchlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistItemUpsertArgs>(args: SelectSubset<T, WatchlistItemUpsertArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemCountArgs} args - Arguments to filter WatchlistItems to count.
     * @example
     * // Count the number of WatchlistItems
     * const count = await prisma.watchlistItem.count({
     *   where: {
     *     // ... the filter for the WatchlistItems we want to count
     *   }
     * })
    **/
    count<T extends WatchlistItemCountArgs>(
      args?: Subset<T, WatchlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistItemAggregateArgs>(args: Subset<T, WatchlistItemAggregateArgs>): Prisma.PrismaPromise<GetWatchlistItemAggregateType<T>>

    /**
     * Group by WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchlistItem model
   */
  readonly fields: WatchlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchlistItem model
   */
  interface WatchlistItemFieldRefs {
    readonly id: FieldRef<"WatchlistItem", 'String'>
    readonly createdAt: FieldRef<"WatchlistItem", 'DateTime'>
    readonly updatedAt: FieldRef<"WatchlistItem", 'DateTime'>
    readonly userId: FieldRef<"WatchlistItem", 'String'>
    readonly tickerId: FieldRef<"WatchlistItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WatchlistItem findUnique
   */
  export type WatchlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findUniqueOrThrow
   */
  export type WatchlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findFirst
   */
  export type WatchlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findFirstOrThrow
   */
  export type WatchlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findMany
   */
  export type WatchlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItems to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem create
   */
  export type WatchlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchlistItem.
     */
    data: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
  }

  /**
   * WatchlistItem createMany
   */
  export type WatchlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchlistItem createManyAndReturn
   */
  export type WatchlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem update
   */
  export type WatchlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchlistItem.
     */
    data: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
    /**
     * Choose, which WatchlistItem to update.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem updateMany
   */
  export type WatchlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to update.
     */
    limit?: number
  }

  /**
   * WatchlistItem updateManyAndReturn
   */
  export type WatchlistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem upsert
   */
  export type WatchlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchlistItem to update in case it exists.
     */
    where: WatchlistItemWhereUniqueInput
    /**
     * In case the WatchlistItem found by the `where` argument doesn't exist, create a new WatchlistItem with this data.
     */
    create: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
    /**
     * In case the WatchlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
  }

  /**
   * WatchlistItem delete
   */
  export type WatchlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter which WatchlistItem to delete.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem deleteMany
   */
  export type WatchlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItems to delete
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to delete.
     */
    limit?: number
  }

  /**
   * WatchlistItem without action
   */
  export type WatchlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
  }


  /**
   * Model DailyPrice
   */

  export type AggregateDailyPrice = {
    _count: DailyPriceCountAggregateOutputType | null
    _avg: DailyPriceAvgAggregateOutputType | null
    _sum: DailyPriceSumAggregateOutputType | null
    _min: DailyPriceMinAggregateOutputType | null
    _max: DailyPriceMaxAggregateOutputType | null
  }

  export type DailyPriceAvgAggregateOutputType = {
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: number | null
  }

  export type DailyPriceSumAggregateOutputType = {
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type DailyPriceMinAggregateOutputType = {
    id: string | null
    date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    tickerId: string | null
  }

  export type DailyPriceMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    tickerId: string | null
  }

  export type DailyPriceCountAggregateOutputType = {
    id: number
    date: number
    open: number
    high: number
    low: number
    close: number
    volume: number
    createdAt: number
    updatedAt: number
    tickerId: number
    _all: number
  }


  export type DailyPriceAvgAggregateInputType = {
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type DailyPriceSumAggregateInputType = {
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type DailyPriceMinAggregateInputType = {
    id?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    createdAt?: true
    updatedAt?: true
    tickerId?: true
  }

  export type DailyPriceMaxAggregateInputType = {
    id?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    createdAt?: true
    updatedAt?: true
    tickerId?: true
  }

  export type DailyPriceCountAggregateInputType = {
    id?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    createdAt?: true
    updatedAt?: true
    tickerId?: true
    _all?: true
  }

  export type DailyPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPrice to aggregate.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyPrices
    **/
    _count?: true | DailyPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyPriceMaxAggregateInputType
  }

  export type GetDailyPriceAggregateType<T extends DailyPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyPrice[P]>
      : GetScalarType<T[P], AggregateDailyPrice[P]>
  }




  export type DailyPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPriceWhereInput
    orderBy?: DailyPriceOrderByWithAggregationInput | DailyPriceOrderByWithAggregationInput[]
    by: DailyPriceScalarFieldEnum[] | DailyPriceScalarFieldEnum
    having?: DailyPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyPriceCountAggregateInputType | true
    _avg?: DailyPriceAvgAggregateInputType
    _sum?: DailyPriceSumAggregateInputType
    _min?: DailyPriceMinAggregateInputType
    _max?: DailyPriceMaxAggregateInputType
  }

  export type DailyPriceGroupByOutputType = {
    id: string
    date: Date
    open: Decimal
    high: Decimal
    low: Decimal
    close: Decimal
    volume: bigint
    createdAt: Date
    updatedAt: Date
    tickerId: string
    _count: DailyPriceCountAggregateOutputType | null
    _avg: DailyPriceAvgAggregateOutputType | null
    _sum: DailyPriceSumAggregateOutputType | null
    _min: DailyPriceMinAggregateOutputType | null
    _max: DailyPriceMaxAggregateOutputType | null
  }

  type GetDailyPriceGroupByPayload<T extends DailyPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyPriceGroupByOutputType[P]>
            : GetScalarType<T[P], DailyPriceGroupByOutputType[P]>
        }
      >
    >


  export type DailyPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickerId?: boolean
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPrice"]>

  export type DailyPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickerId?: boolean
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPrice"]>

  export type DailyPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickerId?: boolean
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPrice"]>

  export type DailyPriceSelectScalar = {
    id?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickerId?: boolean
  }

  export type DailyPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "open" | "high" | "low" | "close" | "volume" | "createdAt" | "updatedAt" | "tickerId", ExtArgs["result"]["dailyPrice"]>
  export type DailyPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }
  export type DailyPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }
  export type DailyPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticker?: boolean | TickerDefaultArgs<ExtArgs>
  }

  export type $DailyPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyPrice"
    objects: {
      ticker: Prisma.$TickerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      open: Prisma.Decimal
      high: Prisma.Decimal
      low: Prisma.Decimal
      close: Prisma.Decimal
      volume: bigint
      createdAt: Date
      updatedAt: Date
      tickerId: string
    }, ExtArgs["result"]["dailyPrice"]>
    composites: {}
  }

  type DailyPriceGetPayload<S extends boolean | null | undefined | DailyPriceDefaultArgs> = $Result.GetResult<Prisma.$DailyPricePayload, S>

  type DailyPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyPriceCountAggregateInputType | true
    }

  export interface DailyPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyPrice'], meta: { name: 'DailyPrice' } }
    /**
     * Find zero or one DailyPrice that matches the filter.
     * @param {DailyPriceFindUniqueArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyPriceFindUniqueArgs>(args: SelectSubset<T, DailyPriceFindUniqueArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyPriceFindUniqueOrThrowArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceFindFirstArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyPriceFindFirstArgs>(args?: SelectSubset<T, DailyPriceFindFirstArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceFindFirstOrThrowArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyPrices
     * const dailyPrices = await prisma.dailyPrice.findMany()
     * 
     * // Get first 10 DailyPrices
     * const dailyPrices = await prisma.dailyPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyPriceWithIdOnly = await prisma.dailyPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyPriceFindManyArgs>(args?: SelectSubset<T, DailyPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyPrice.
     * @param {DailyPriceCreateArgs} args - Arguments to create a DailyPrice.
     * @example
     * // Create one DailyPrice
     * const DailyPrice = await prisma.dailyPrice.create({
     *   data: {
     *     // ... data to create a DailyPrice
     *   }
     * })
     * 
     */
    create<T extends DailyPriceCreateArgs>(args: SelectSubset<T, DailyPriceCreateArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyPrices.
     * @param {DailyPriceCreateManyArgs} args - Arguments to create many DailyPrices.
     * @example
     * // Create many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyPriceCreateManyArgs>(args?: SelectSubset<T, DailyPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyPrices and returns the data saved in the database.
     * @param {DailyPriceCreateManyAndReturnArgs} args - Arguments to create many DailyPrices.
     * @example
     * // Create many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyPrices and only return the `id`
     * const dailyPriceWithIdOnly = await prisma.dailyPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyPrice.
     * @param {DailyPriceDeleteArgs} args - Arguments to delete one DailyPrice.
     * @example
     * // Delete one DailyPrice
     * const DailyPrice = await prisma.dailyPrice.delete({
     *   where: {
     *     // ... filter to delete one DailyPrice
     *   }
     * })
     * 
     */
    delete<T extends DailyPriceDeleteArgs>(args: SelectSubset<T, DailyPriceDeleteArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyPrice.
     * @param {DailyPriceUpdateArgs} args - Arguments to update one DailyPrice.
     * @example
     * // Update one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyPriceUpdateArgs>(args: SelectSubset<T, DailyPriceUpdateArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyPrices.
     * @param {DailyPriceDeleteManyArgs} args - Arguments to filter DailyPrices to delete.
     * @example
     * // Delete a few DailyPrices
     * const { count } = await prisma.dailyPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyPriceDeleteManyArgs>(args?: SelectSubset<T, DailyPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyPriceUpdateManyArgs>(args: SelectSubset<T, DailyPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPrices and returns the data updated in the database.
     * @param {DailyPriceUpdateManyAndReturnArgs} args - Arguments to update many DailyPrices.
     * @example
     * // Update many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyPrices and only return the `id`
     * const dailyPriceWithIdOnly = await prisma.dailyPrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyPrice.
     * @param {DailyPriceUpsertArgs} args - Arguments to update or create a DailyPrice.
     * @example
     * // Update or create a DailyPrice
     * const dailyPrice = await prisma.dailyPrice.upsert({
     *   create: {
     *     // ... data to create a DailyPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyPrice we want to update
     *   }
     * })
     */
    upsert<T extends DailyPriceUpsertArgs>(args: SelectSubset<T, DailyPriceUpsertArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceCountArgs} args - Arguments to filter DailyPrices to count.
     * @example
     * // Count the number of DailyPrices
     * const count = await prisma.dailyPrice.count({
     *   where: {
     *     // ... the filter for the DailyPrices we want to count
     *   }
     * })
    **/
    count<T extends DailyPriceCountArgs>(
      args?: Subset<T, DailyPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyPriceAggregateArgs>(args: Subset<T, DailyPriceAggregateArgs>): Prisma.PrismaPromise<GetDailyPriceAggregateType<T>>

    /**
     * Group by DailyPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyPriceGroupByArgs['orderBy'] }
        : { orderBy?: DailyPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyPrice model
   */
  readonly fields: DailyPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticker<T extends TickerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TickerDefaultArgs<ExtArgs>>): Prisma__TickerClient<$Result.GetResult<Prisma.$TickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyPrice model
   */
  interface DailyPriceFieldRefs {
    readonly id: FieldRef<"DailyPrice", 'String'>
    readonly date: FieldRef<"DailyPrice", 'DateTime'>
    readonly open: FieldRef<"DailyPrice", 'Decimal'>
    readonly high: FieldRef<"DailyPrice", 'Decimal'>
    readonly low: FieldRef<"DailyPrice", 'Decimal'>
    readonly close: FieldRef<"DailyPrice", 'Decimal'>
    readonly volume: FieldRef<"DailyPrice", 'BigInt'>
    readonly createdAt: FieldRef<"DailyPrice", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyPrice", 'DateTime'>
    readonly tickerId: FieldRef<"DailyPrice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyPrice findUnique
   */
  export type DailyPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice findUniqueOrThrow
   */
  export type DailyPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice findFirst
   */
  export type DailyPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPrices.
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPrices.
     */
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * DailyPrice findFirstOrThrow
   */
  export type DailyPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPrices.
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPrices.
     */
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * DailyPrice findMany
   */
  export type DailyPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrices to fetch.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyPrices.
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * DailyPrice create
   */
  export type DailyPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyPrice.
     */
    data: XOR<DailyPriceCreateInput, DailyPriceUncheckedCreateInput>
  }

  /**
   * DailyPrice createMany
   */
  export type DailyPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyPrices.
     */
    data: DailyPriceCreateManyInput | DailyPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyPrice createManyAndReturn
   */
  export type DailyPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * The data used to create many DailyPrices.
     */
    data: DailyPriceCreateManyInput | DailyPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyPrice update
   */
  export type DailyPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyPrice.
     */
    data: XOR<DailyPriceUpdateInput, DailyPriceUncheckedUpdateInput>
    /**
     * Choose, which DailyPrice to update.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice updateMany
   */
  export type DailyPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyPrices.
     */
    data: XOR<DailyPriceUpdateManyMutationInput, DailyPriceUncheckedUpdateManyInput>
    /**
     * Filter which DailyPrices to update
     */
    where?: DailyPriceWhereInput
    /**
     * Limit how many DailyPrices to update.
     */
    limit?: number
  }

  /**
   * DailyPrice updateManyAndReturn
   */
  export type DailyPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * The data used to update DailyPrices.
     */
    data: XOR<DailyPriceUpdateManyMutationInput, DailyPriceUncheckedUpdateManyInput>
    /**
     * Filter which DailyPrices to update
     */
    where?: DailyPriceWhereInput
    /**
     * Limit how many DailyPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyPrice upsert
   */
  export type DailyPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyPrice to update in case it exists.
     */
    where: DailyPriceWhereUniqueInput
    /**
     * In case the DailyPrice found by the `where` argument doesn't exist, create a new DailyPrice with this data.
     */
    create: XOR<DailyPriceCreateInput, DailyPriceUncheckedCreateInput>
    /**
     * In case the DailyPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyPriceUpdateInput, DailyPriceUncheckedUpdateInput>
  }

  /**
   * DailyPrice delete
   */
  export type DailyPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
    /**
     * Filter which DailyPrice to delete.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice deleteMany
   */
  export type DailyPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPrices to delete
     */
    where?: DailyPriceWhereInput
    /**
     * Limit how many DailyPrices to delete.
     */
    limit?: number
  }

  /**
   * DailyPrice without action
   */
  export type DailyPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrice
     */
    omit?: DailyPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPriceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    name: 'name',
    picture: 'picture',
    verified: 'verified',
    twoFactorEnabled: 'twoFactorEnabled',
    authMethod: 'authMethod'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    provider: 'provider',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    type: 'type',
    token: 'token',
    expiresIn: 'expiresIn',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const PortfolioHoldingScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    avgBuyPrice: 'avgBuyPrice',
    purchasedAt: 'purchasedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    portfolioId: 'portfolioId',
    tickerId: 'tickerId'
  };

  export type PortfolioHoldingScalarFieldEnum = (typeof PortfolioHoldingScalarFieldEnum)[keyof typeof PortfolioHoldingScalarFieldEnum]


  export const TickerScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    type: 'type',
    exchange: 'exchange',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TickerScalarFieldEnum = (typeof TickerScalarFieldEnum)[keyof typeof TickerScalarFieldEnum]


  export const WatchlistItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    tickerId: 'tickerId'
  };

  export type WatchlistItemScalarFieldEnum = (typeof WatchlistItemScalarFieldEnum)[keyof typeof WatchlistItemScalarFieldEnum]


  export const DailyPriceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    volume: 'volume',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tickerId: 'tickerId'
  };

  export type DailyPriceScalarFieldEnum = (typeof DailyPriceScalarFieldEnum)[keyof typeof DailyPriceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthMethod'
   */
  export type EnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod'>
    


  /**
   * Reference to a field of type 'AuthMethod[]'
   */
  export type ListEnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TickerType'
   */
  export type EnumTickerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TickerType'>
    


  /**
   * Reference to a field of type 'TickerType[]'
   */
  export type ListEnumTickerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TickerType[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    verified?: BoolFilter<"User"> | boolean
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    authMethod?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    sessions?: SessionListRelationFilter
    portfolios?: PortfolioListRelationFilter
    watchlist?: WatchlistItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    name?: SortOrder
    picture?: SortOrderInput | SortOrder
    verified?: SortOrder
    twoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    portfolios?: PortfolioOrderByRelationAggregateInput
    watchlist?: WatchlistItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    verified?: BoolFilter<"User"> | boolean
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    authMethod?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    sessions?: SessionListRelationFilter
    portfolios?: PortfolioListRelationFilter
    watchlist?: WatchlistItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    name?: SortOrder
    picture?: SortOrderInput | SortOrder
    verified?: SortOrder
    twoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    authMethod?: EnumAuthMethodWithAggregatesFilter<"User"> | $Enums.AuthMethod
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    type?: StringFilter<"Session"> | string
    provider?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    refreshToken?: StringFilter<"Session"> | string
    expiresAt?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    type?: StringFilter<"Session"> | string
    provider?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    refreshToken?: StringFilter<"Session"> | string
    expiresAt?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    type?: StringWithAggregatesFilter<"Session"> | string
    provider?: StringWithAggregatesFilter<"Session"> | string
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    refreshToken?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: IntWithAggregatesFilter<"Session"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    email?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    token?: StringFilter<"Token"> | string
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    email?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    email?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    token?: StringWithAggregatesFilter<"Token"> | string
    expiresIn?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    name?: StringFilter<"Portfolio"> | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    userId?: StringFilter<"Portfolio"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    holdings?: PortfolioHoldingListRelationFilter
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    holdings?: PortfolioHoldingOrderByRelationAggregateInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    name?: StringFilter<"Portfolio"> | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    userId?: StringFilter<"Portfolio"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    holdings?: PortfolioHoldingListRelationFilter
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Portfolio"> | string
    name?: StringWithAggregatesFilter<"Portfolio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    userId?: StringWithAggregatesFilter<"Portfolio"> | string
  }

  export type PortfolioHoldingWhereInput = {
    AND?: PortfolioHoldingWhereInput | PortfolioHoldingWhereInput[]
    OR?: PortfolioHoldingWhereInput[]
    NOT?: PortfolioHoldingWhereInput | PortfolioHoldingWhereInput[]
    id?: StringFilter<"PortfolioHolding"> | string
    quantity?: DecimalFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    createdAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    portfolioId?: StringFilter<"PortfolioHolding"> | string
    tickerId?: StringFilter<"PortfolioHolding"> | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
    ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type PortfolioHoldingOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioId?: SortOrder
    tickerId?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
    ticker?: TickerOrderByWithRelationInput
  }

  export type PortfolioHoldingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioHoldingWhereInput | PortfolioHoldingWhereInput[]
    OR?: PortfolioHoldingWhereInput[]
    NOT?: PortfolioHoldingWhereInput | PortfolioHoldingWhereInput[]
    quantity?: DecimalFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    createdAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    portfolioId?: StringFilter<"PortfolioHolding"> | string
    tickerId?: StringFilter<"PortfolioHolding"> | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
    ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id">

  export type PortfolioHoldingOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioId?: SortOrder
    tickerId?: SortOrder
    _count?: PortfolioHoldingCountOrderByAggregateInput
    _avg?: PortfolioHoldingAvgOrderByAggregateInput
    _max?: PortfolioHoldingMaxOrderByAggregateInput
    _min?: PortfolioHoldingMinOrderByAggregateInput
    _sum?: PortfolioHoldingSumOrderByAggregateInput
  }

  export type PortfolioHoldingScalarWhereWithAggregatesInput = {
    AND?: PortfolioHoldingScalarWhereWithAggregatesInput | PortfolioHoldingScalarWhereWithAggregatesInput[]
    OR?: PortfolioHoldingScalarWhereWithAggregatesInput[]
    NOT?: PortfolioHoldingScalarWhereWithAggregatesInput | PortfolioHoldingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioHolding"> | string
    quantity?: DecimalWithAggregatesFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalWithAggregatesFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeWithAggregatesFilter<"PortfolioHolding"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioHolding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioHolding"> | Date | string
    portfolioId?: StringWithAggregatesFilter<"PortfolioHolding"> | string
    tickerId?: StringWithAggregatesFilter<"PortfolioHolding"> | string
  }

  export type TickerWhereInput = {
    AND?: TickerWhereInput | TickerWhereInput[]
    OR?: TickerWhereInput[]
    NOT?: TickerWhereInput | TickerWhereInput[]
    id?: StringFilter<"Ticker"> | string
    symbol?: StringFilter<"Ticker"> | string
    name?: StringFilter<"Ticker"> | string
    type?: EnumTickerTypeFilter<"Ticker"> | $Enums.TickerType
    exchange?: StringNullableFilter<"Ticker"> | string | null
    createdAt?: DateTimeFilter<"Ticker"> | Date | string
    updatedAt?: DateTimeFilter<"Ticker"> | Date | string
    holdings?: PortfolioHoldingListRelationFilter
    watchlist?: WatchlistItemListRelationFilter
    dailyPrices?: DailyPriceListRelationFilter
  }

  export type TickerOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    exchange?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    holdings?: PortfolioHoldingOrderByRelationAggregateInput
    watchlist?: WatchlistItemOrderByRelationAggregateInput
    dailyPrices?: DailyPriceOrderByRelationAggregateInput
  }

  export type TickerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    AND?: TickerWhereInput | TickerWhereInput[]
    OR?: TickerWhereInput[]
    NOT?: TickerWhereInput | TickerWhereInput[]
    name?: StringFilter<"Ticker"> | string
    type?: EnumTickerTypeFilter<"Ticker"> | $Enums.TickerType
    exchange?: StringNullableFilter<"Ticker"> | string | null
    createdAt?: DateTimeFilter<"Ticker"> | Date | string
    updatedAt?: DateTimeFilter<"Ticker"> | Date | string
    holdings?: PortfolioHoldingListRelationFilter
    watchlist?: WatchlistItemListRelationFilter
    dailyPrices?: DailyPriceListRelationFilter
  }, "id" | "symbol">

  export type TickerOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    exchange?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TickerCountOrderByAggregateInput
    _max?: TickerMaxOrderByAggregateInput
    _min?: TickerMinOrderByAggregateInput
  }

  export type TickerScalarWhereWithAggregatesInput = {
    AND?: TickerScalarWhereWithAggregatesInput | TickerScalarWhereWithAggregatesInput[]
    OR?: TickerScalarWhereWithAggregatesInput[]
    NOT?: TickerScalarWhereWithAggregatesInput | TickerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticker"> | string
    symbol?: StringWithAggregatesFilter<"Ticker"> | string
    name?: StringWithAggregatesFilter<"Ticker"> | string
    type?: EnumTickerTypeWithAggregatesFilter<"Ticker"> | $Enums.TickerType
    exchange?: StringNullableWithAggregatesFilter<"Ticker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticker"> | Date | string
  }

  export type WatchlistItemWhereInput = {
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    createdAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    userId?: StringFilter<"WatchlistItem"> | string
    tickerId?: StringFilter<"WatchlistItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type WatchlistItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tickerId?: SortOrder
    user?: UserOrderByWithRelationInput
    ticker?: TickerOrderByWithRelationInput
  }

  export type WatchlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tickerId?: WatchlistItemUserIdTickerIdCompoundUniqueInput
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    createdAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    userId?: StringFilter<"WatchlistItem"> | string
    tickerId?: StringFilter<"WatchlistItem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "userId_tickerId">

  export type WatchlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tickerId?: SortOrder
    _count?: WatchlistItemCountOrderByAggregateInput
    _max?: WatchlistItemMaxOrderByAggregateInput
    _min?: WatchlistItemMinOrderByAggregateInput
  }

  export type WatchlistItemScalarWhereWithAggregatesInput = {
    AND?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    OR?: WatchlistItemScalarWhereWithAggregatesInput[]
    NOT?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchlistItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WatchlistItem"> | Date | string
    userId?: StringWithAggregatesFilter<"WatchlistItem"> | string
    tickerId?: StringWithAggregatesFilter<"WatchlistItem"> | string
  }

  export type DailyPriceWhereInput = {
    AND?: DailyPriceWhereInput | DailyPriceWhereInput[]
    OR?: DailyPriceWhereInput[]
    NOT?: DailyPriceWhereInput | DailyPriceWhereInput[]
    id?: StringFilter<"DailyPrice"> | string
    date?: DateTimeFilter<"DailyPrice"> | Date | string
    open?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntFilter<"DailyPrice"> | bigint | number
    createdAt?: DateTimeFilter<"DailyPrice"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPrice"> | Date | string
    tickerId?: StringFilter<"DailyPrice"> | string
    ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }

  export type DailyPriceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickerId?: SortOrder
    ticker?: TickerOrderByWithRelationInput
  }

  export type DailyPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tickerId_date?: DailyPriceTickerIdDateCompoundUniqueInput
    AND?: DailyPriceWhereInput | DailyPriceWhereInput[]
    OR?: DailyPriceWhereInput[]
    NOT?: DailyPriceWhereInput | DailyPriceWhereInput[]
    date?: DateTimeFilter<"DailyPrice"> | Date | string
    open?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntFilter<"DailyPrice"> | bigint | number
    createdAt?: DateTimeFilter<"DailyPrice"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPrice"> | Date | string
    tickerId?: StringFilter<"DailyPrice"> | string
    ticker?: XOR<TickerScalarRelationFilter, TickerWhereInput>
  }, "id" | "tickerId_date">

  export type DailyPriceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickerId?: SortOrder
    _count?: DailyPriceCountOrderByAggregateInput
    _avg?: DailyPriceAvgOrderByAggregateInput
    _max?: DailyPriceMaxOrderByAggregateInput
    _min?: DailyPriceMinOrderByAggregateInput
    _sum?: DailyPriceSumOrderByAggregateInput
  }

  export type DailyPriceScalarWhereWithAggregatesInput = {
    AND?: DailyPriceScalarWhereWithAggregatesInput | DailyPriceScalarWhereWithAggregatesInput[]
    OR?: DailyPriceScalarWhereWithAggregatesInput[]
    NOT?: DailyPriceScalarWhereWithAggregatesInput | DailyPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyPrice"> | string
    date?: DateTimeWithAggregatesFilter<"DailyPrice"> | Date | string
    open?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntWithAggregatesFilter<"DailyPrice"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyPrice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyPrice"> | Date | string
    tickerId?: StringWithAggregatesFilter<"DailyPrice"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    sessions?: SessionCreateNestedManyWithoutUserInput
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlist?: WatchlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    sessions?: SessionUpdateManyWithoutUserNestedInput
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
  }

  export type SessionCreateInput = {
    id?: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateInput = {
    id?: string
    email: string
    type: $Enums.TokenType
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    email: string
    type: $Enums.TokenType
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    email: string
    type: $Enums.TokenType
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
    holdings?: PortfolioHoldingCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    holdings?: PortfolioHoldingUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
    holdings?: PortfolioHoldingUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    holdings?: PortfolioHoldingUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioHoldingCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutHoldingsInput
    ticker: TickerCreateNestedOneWithoutHoldingsInput
  }

  export type PortfolioHoldingUncheckedCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioId: string
    tickerId: string
  }

  export type PortfolioHoldingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutHoldingsNestedInput
    ticker?: TickerUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type PortfolioHoldingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioHoldingCreateManyInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioId: string
    tickerId: string
  }

  export type PortfolioHoldingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioHoldingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type TickerCreateInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingCreateNestedManyWithoutTickerInput
    watchlist?: WatchlistItemCreateNestedManyWithoutTickerInput
    dailyPrices?: DailyPriceCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingUncheckedCreateNestedManyWithoutTickerInput
    watchlist?: WatchlistItemUncheckedCreateNestedManyWithoutTickerInput
    dailyPrices?: DailyPriceUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUpdateManyWithoutTickerNestedInput
    watchlist?: WatchlistItemUpdateManyWithoutTickerNestedInput
    dailyPrices?: DailyPriceUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUncheckedUpdateManyWithoutTickerNestedInput
    watchlist?: WatchlistItemUncheckedUpdateManyWithoutTickerNestedInput
    dailyPrices?: DailyPriceUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateManyInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TickerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TickerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
    ticker: TickerCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tickerId: string
  }

  export type WatchlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
    ticker?: TickerUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tickerId: string
  }

  export type WatchlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyPriceCreateInput = {
    id?: string
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticker: TickerCreateNestedOneWithoutDailyPricesInput
  }

  export type DailyPriceUncheckedCreateInput = {
    id?: string
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickerId: string
  }

  export type DailyPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: TickerUpdateOneRequiredWithoutDailyPricesNestedInput
  }

  export type DailyPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyPriceCreateManyInput = {
    id?: string
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickerId: string
  }

  export type DailyPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PortfolioListRelationFilter = {
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
  }

  export type WatchlistItemListRelationFilter = {
    every?: WatchlistItemWhereInput
    some?: WatchlistItemWhereInput
    none?: WatchlistItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    verified?: SortOrder
    twoFactorEnabled?: SortOrder
    authMethod?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    verified?: SortOrder
    twoFactorEnabled?: SortOrder
    authMethod?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    verified?: SortOrder
    twoFactorEnabled?: SortOrder
    authMethod?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type PortfolioHoldingListRelationFilter = {
    every?: PortfolioHoldingWhereInput
    some?: PortfolioHoldingWhereInput
    none?: PortfolioHoldingWhereInput
  }

  export type PortfolioHoldingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PortfolioScalarRelationFilter = {
    is?: PortfolioWhereInput
    isNot?: PortfolioWhereInput
  }

  export type TickerScalarRelationFilter = {
    is?: TickerWhereInput
    isNot?: TickerWhereInput
  }

  export type PortfolioHoldingCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioId?: SortOrder
    tickerId?: SortOrder
  }

  export type PortfolioHoldingAvgOrderByAggregateInput = {
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
  }

  export type PortfolioHoldingMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioId?: SortOrder
    tickerId?: SortOrder
  }

  export type PortfolioHoldingMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    purchasedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioId?: SortOrder
    tickerId?: SortOrder
  }

  export type PortfolioHoldingSumOrderByAggregateInput = {
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTickerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TickerType | EnumTickerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTickerTypeFilter<$PrismaModel> | $Enums.TickerType
  }

  export type DailyPriceListRelationFilter = {
    every?: DailyPriceWhereInput
    some?: DailyPriceWhereInput
    none?: DailyPriceWhereInput
  }

  export type DailyPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TickerCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    exchange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TickerMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    exchange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TickerMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    exchange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTickerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TickerType | EnumTickerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTickerTypeWithAggregatesFilter<$PrismaModel> | $Enums.TickerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTickerTypeFilter<$PrismaModel>
    _max?: NestedEnumTickerTypeFilter<$PrismaModel>
  }

  export type WatchlistItemUserIdTickerIdCompoundUniqueInput = {
    userId: string
    tickerId: string
  }

  export type WatchlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tickerId?: SortOrder
  }

  export type WatchlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tickerId?: SortOrder
  }

  export type WatchlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tickerId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DailyPriceTickerIdDateCompoundUniqueInput = {
    tickerId: string
    date: Date | string
  }

  export type DailyPriceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickerId?: SortOrder
  }

  export type DailyPriceAvgOrderByAggregateInput = {
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type DailyPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickerId?: SortOrder
  }

  export type DailyPriceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickerId?: SortOrder
  }

  export type DailyPriceSumOrderByAggregateInput = {
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PortfolioCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type WatchlistItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistItemCreateWithoutUserInput, WatchlistItemUncheckedCreateWithoutUserInput> | WatchlistItemCreateWithoutUserInput[] | WatchlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutUserInput | WatchlistItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistItemCreateManyUserInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistItemCreateWithoutUserInput, WatchlistItemUncheckedCreateWithoutUserInput> | WatchlistItemCreateWithoutUserInput[] | WatchlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutUserInput | WatchlistItemCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistItemCreateManyUserInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethod
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PortfolioUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUserInput | PortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUserInput | PortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUserInput | PortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type WatchlistItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutUserInput, WatchlistItemUncheckedCreateWithoutUserInput> | WatchlistItemCreateWithoutUserInput[] | WatchlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutUserInput | WatchlistItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutUserInput | WatchlistItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistItemCreateManyUserInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutUserInput | WatchlistItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutUserInput | WatchlistItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PortfolioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUserInput | PortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUserInput | PortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUserInput | PortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutUserInput, WatchlistItemUncheckedCreateWithoutUserInput> | WatchlistItemCreateWithoutUserInput[] | WatchlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutUserInput | WatchlistItemCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutUserInput | WatchlistItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistItemCreateManyUserInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutUserInput | WatchlistItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutUserInput | WatchlistItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
  }

  export type PortfolioHoldingCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioHoldingCreateWithoutPortfolioInput, PortfolioHoldingUncheckedCreateWithoutPortfolioInput> | PortfolioHoldingCreateWithoutPortfolioInput[] | PortfolioHoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutPortfolioInput | PortfolioHoldingCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioHoldingCreateManyPortfolioInputEnvelope
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
  }

  export type PortfolioHoldingUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioHoldingCreateWithoutPortfolioInput, PortfolioHoldingUncheckedCreateWithoutPortfolioInput> | PortfolioHoldingCreateWithoutPortfolioInput[] | PortfolioHoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutPortfolioInput | PortfolioHoldingCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioHoldingCreateManyPortfolioInputEnvelope
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPortfoliosNestedInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    upsert?: UserUpsertWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPortfoliosInput, UserUpdateWithoutPortfoliosInput>, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type PortfolioHoldingUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioHoldingCreateWithoutPortfolioInput, PortfolioHoldingUncheckedCreateWithoutPortfolioInput> | PortfolioHoldingCreateWithoutPortfolioInput[] | PortfolioHoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutPortfolioInput | PortfolioHoldingCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioHoldingUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioHoldingUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioHoldingCreateManyPortfolioInputEnvelope
    set?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    disconnect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    delete?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    update?: PortfolioHoldingUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioHoldingUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioHoldingUpdateManyWithWhereWithoutPortfolioInput | PortfolioHoldingUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioHoldingScalarWhereInput | PortfolioHoldingScalarWhereInput[]
  }

  export type PortfolioHoldingUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioHoldingCreateWithoutPortfolioInput, PortfolioHoldingUncheckedCreateWithoutPortfolioInput> | PortfolioHoldingCreateWithoutPortfolioInput[] | PortfolioHoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutPortfolioInput | PortfolioHoldingCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioHoldingUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioHoldingUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioHoldingCreateManyPortfolioInputEnvelope
    set?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    disconnect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    delete?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    update?: PortfolioHoldingUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioHoldingUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioHoldingUpdateManyWithWhereWithoutPortfolioInput | PortfolioHoldingUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioHoldingScalarWhereInput | PortfolioHoldingScalarWhereInput[]
  }

  export type PortfolioCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutHoldingsInput
    connect?: PortfolioWhereUniqueInput
  }

  export type TickerCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<TickerCreateWithoutHoldingsInput, TickerUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutHoldingsInput
    connect?: TickerWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PortfolioUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutHoldingsInput
    upsert?: PortfolioUpsertWithoutHoldingsInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutHoldingsInput, PortfolioUpdateWithoutHoldingsInput>, PortfolioUncheckedUpdateWithoutHoldingsInput>
  }

  export type TickerUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<TickerCreateWithoutHoldingsInput, TickerUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: TickerCreateOrConnectWithoutHoldingsInput
    upsert?: TickerUpsertWithoutHoldingsInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutHoldingsInput, TickerUpdateWithoutHoldingsInput>, TickerUncheckedUpdateWithoutHoldingsInput>
  }

  export type PortfolioHoldingCreateNestedManyWithoutTickerInput = {
    create?: XOR<PortfolioHoldingCreateWithoutTickerInput, PortfolioHoldingUncheckedCreateWithoutTickerInput> | PortfolioHoldingCreateWithoutTickerInput[] | PortfolioHoldingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutTickerInput | PortfolioHoldingCreateOrConnectWithoutTickerInput[]
    createMany?: PortfolioHoldingCreateManyTickerInputEnvelope
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
  }

  export type WatchlistItemCreateNestedManyWithoutTickerInput = {
    create?: XOR<WatchlistItemCreateWithoutTickerInput, WatchlistItemUncheckedCreateWithoutTickerInput> | WatchlistItemCreateWithoutTickerInput[] | WatchlistItemUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutTickerInput | WatchlistItemCreateOrConnectWithoutTickerInput[]
    createMany?: WatchlistItemCreateManyTickerInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type DailyPriceCreateNestedManyWithoutTickerInput = {
    create?: XOR<DailyPriceCreateWithoutTickerInput, DailyPriceUncheckedCreateWithoutTickerInput> | DailyPriceCreateWithoutTickerInput[] | DailyPriceUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: DailyPriceCreateOrConnectWithoutTickerInput | DailyPriceCreateOrConnectWithoutTickerInput[]
    createMany?: DailyPriceCreateManyTickerInputEnvelope
    connect?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
  }

  export type PortfolioHoldingUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<PortfolioHoldingCreateWithoutTickerInput, PortfolioHoldingUncheckedCreateWithoutTickerInput> | PortfolioHoldingCreateWithoutTickerInput[] | PortfolioHoldingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutTickerInput | PortfolioHoldingCreateOrConnectWithoutTickerInput[]
    createMany?: PortfolioHoldingCreateManyTickerInputEnvelope
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<WatchlistItemCreateWithoutTickerInput, WatchlistItemUncheckedCreateWithoutTickerInput> | WatchlistItemCreateWithoutTickerInput[] | WatchlistItemUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutTickerInput | WatchlistItemCreateOrConnectWithoutTickerInput[]
    createMany?: WatchlistItemCreateManyTickerInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type DailyPriceUncheckedCreateNestedManyWithoutTickerInput = {
    create?: XOR<DailyPriceCreateWithoutTickerInput, DailyPriceUncheckedCreateWithoutTickerInput> | DailyPriceCreateWithoutTickerInput[] | DailyPriceUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: DailyPriceCreateOrConnectWithoutTickerInput | DailyPriceCreateOrConnectWithoutTickerInput[]
    createMany?: DailyPriceCreateManyTickerInputEnvelope
    connect?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
  }

  export type EnumTickerTypeFieldUpdateOperationsInput = {
    set?: $Enums.TickerType
  }

  export type PortfolioHoldingUpdateManyWithoutTickerNestedInput = {
    create?: XOR<PortfolioHoldingCreateWithoutTickerInput, PortfolioHoldingUncheckedCreateWithoutTickerInput> | PortfolioHoldingCreateWithoutTickerInput[] | PortfolioHoldingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutTickerInput | PortfolioHoldingCreateOrConnectWithoutTickerInput[]
    upsert?: PortfolioHoldingUpsertWithWhereUniqueWithoutTickerInput | PortfolioHoldingUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: PortfolioHoldingCreateManyTickerInputEnvelope
    set?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    disconnect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    delete?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    update?: PortfolioHoldingUpdateWithWhereUniqueWithoutTickerInput | PortfolioHoldingUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: PortfolioHoldingUpdateManyWithWhereWithoutTickerInput | PortfolioHoldingUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: PortfolioHoldingScalarWhereInput | PortfolioHoldingScalarWhereInput[]
  }

  export type WatchlistItemUpdateManyWithoutTickerNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutTickerInput, WatchlistItemUncheckedCreateWithoutTickerInput> | WatchlistItemCreateWithoutTickerInput[] | WatchlistItemUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutTickerInput | WatchlistItemCreateOrConnectWithoutTickerInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutTickerInput | WatchlistItemUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: WatchlistItemCreateManyTickerInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutTickerInput | WatchlistItemUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutTickerInput | WatchlistItemUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type DailyPriceUpdateManyWithoutTickerNestedInput = {
    create?: XOR<DailyPriceCreateWithoutTickerInput, DailyPriceUncheckedCreateWithoutTickerInput> | DailyPriceCreateWithoutTickerInput[] | DailyPriceUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: DailyPriceCreateOrConnectWithoutTickerInput | DailyPriceCreateOrConnectWithoutTickerInput[]
    upsert?: DailyPriceUpsertWithWhereUniqueWithoutTickerInput | DailyPriceUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: DailyPriceCreateManyTickerInputEnvelope
    set?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    disconnect?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    delete?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    connect?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    update?: DailyPriceUpdateWithWhereUniqueWithoutTickerInput | DailyPriceUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: DailyPriceUpdateManyWithWhereWithoutTickerInput | DailyPriceUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: DailyPriceScalarWhereInput | DailyPriceScalarWhereInput[]
  }

  export type PortfolioHoldingUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<PortfolioHoldingCreateWithoutTickerInput, PortfolioHoldingUncheckedCreateWithoutTickerInput> | PortfolioHoldingCreateWithoutTickerInput[] | PortfolioHoldingUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: PortfolioHoldingCreateOrConnectWithoutTickerInput | PortfolioHoldingCreateOrConnectWithoutTickerInput[]
    upsert?: PortfolioHoldingUpsertWithWhereUniqueWithoutTickerInput | PortfolioHoldingUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: PortfolioHoldingCreateManyTickerInputEnvelope
    set?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    disconnect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    delete?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    connect?: PortfolioHoldingWhereUniqueInput | PortfolioHoldingWhereUniqueInput[]
    update?: PortfolioHoldingUpdateWithWhereUniqueWithoutTickerInput | PortfolioHoldingUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: PortfolioHoldingUpdateManyWithWhereWithoutTickerInput | PortfolioHoldingUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: PortfolioHoldingScalarWhereInput | PortfolioHoldingScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutTickerInput, WatchlistItemUncheckedCreateWithoutTickerInput> | WatchlistItemCreateWithoutTickerInput[] | WatchlistItemUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutTickerInput | WatchlistItemCreateOrConnectWithoutTickerInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutTickerInput | WatchlistItemUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: WatchlistItemCreateManyTickerInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutTickerInput | WatchlistItemUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutTickerInput | WatchlistItemUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type DailyPriceUncheckedUpdateManyWithoutTickerNestedInput = {
    create?: XOR<DailyPriceCreateWithoutTickerInput, DailyPriceUncheckedCreateWithoutTickerInput> | DailyPriceCreateWithoutTickerInput[] | DailyPriceUncheckedCreateWithoutTickerInput[]
    connectOrCreate?: DailyPriceCreateOrConnectWithoutTickerInput | DailyPriceCreateOrConnectWithoutTickerInput[]
    upsert?: DailyPriceUpsertWithWhereUniqueWithoutTickerInput | DailyPriceUpsertWithWhereUniqueWithoutTickerInput[]
    createMany?: DailyPriceCreateManyTickerInputEnvelope
    set?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    disconnect?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    delete?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    connect?: DailyPriceWhereUniqueInput | DailyPriceWhereUniqueInput[]
    update?: DailyPriceUpdateWithWhereUniqueWithoutTickerInput | DailyPriceUpdateWithWhereUniqueWithoutTickerInput[]
    updateMany?: DailyPriceUpdateManyWithWhereWithoutTickerInput | DailyPriceUpdateManyWithWhereWithoutTickerInput[]
    deleteMany?: DailyPriceScalarWhereInput | DailyPriceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    connect?: UserWhereUniqueInput
  }

  export type TickerCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<TickerCreateWithoutWatchlistInput, TickerUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: TickerCreateOrConnectWithoutWatchlistInput
    connect?: TickerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    upsert?: UserUpsertWithoutWatchlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistInput, UserUpdateWithoutWatchlistInput>, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type TickerUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<TickerCreateWithoutWatchlistInput, TickerUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: TickerCreateOrConnectWithoutWatchlistInput
    upsert?: TickerUpsertWithoutWatchlistInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutWatchlistInput, TickerUpdateWithoutWatchlistInput>, TickerUncheckedUpdateWithoutWatchlistInput>
  }

  export type TickerCreateNestedOneWithoutDailyPricesInput = {
    create?: XOR<TickerCreateWithoutDailyPricesInput, TickerUncheckedCreateWithoutDailyPricesInput>
    connectOrCreate?: TickerCreateOrConnectWithoutDailyPricesInput
    connect?: TickerWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type TickerUpdateOneRequiredWithoutDailyPricesNestedInput = {
    create?: XOR<TickerCreateWithoutDailyPricesInput, TickerUncheckedCreateWithoutDailyPricesInput>
    connectOrCreate?: TickerCreateOrConnectWithoutDailyPricesInput
    upsert?: TickerUpsertWithoutDailyPricesInput
    connect?: TickerWhereUniqueInput
    update?: XOR<XOR<TickerUpdateToOneWithWhereWithoutDailyPricesInput, TickerUpdateWithoutDailyPricesInput>, TickerUncheckedUpdateWithoutDailyPricesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTickerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TickerType | EnumTickerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTickerTypeFilter<$PrismaModel> | $Enums.TickerType
  }

  export type NestedEnumTickerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TickerType | EnumTickerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickerType[] | ListEnumTickerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTickerTypeWithAggregatesFilter<$PrismaModel> | $Enums.TickerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTickerTypeFilter<$PrismaModel>
    _max?: NestedEnumTickerTypeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type PortfolioCreateManyUserInputEnvelope = {
    data: PortfolioCreateManyUserInput | PortfolioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticker: TickerCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistItemUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickerId: string
  }

  export type WatchlistItemCreateOrConnectWithoutUserInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutUserInput, WatchlistItemUncheckedCreateWithoutUserInput>
  }

  export type WatchlistItemCreateManyUserInputEnvelope = {
    data: WatchlistItemCreateManyUserInput | WatchlistItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    type?: StringFilter<"Session"> | string
    provider?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    refreshToken?: StringFilter<"Session"> | string
    expiresAt?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
  }

  export type PortfolioUpsertWithWhereUniqueWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutUserInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutUserInput>
  }

  export type PortfolioScalarWhereInput = {
    AND?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    OR?: PortfolioScalarWhereInput[]
    NOT?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    name?: StringFilter<"Portfolio"> | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    userId?: StringFilter<"Portfolio"> | string
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutUserInput, WatchlistItemUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistItemCreateWithoutUserInput, WatchlistItemUncheckedCreateWithoutUserInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutUserInput, WatchlistItemUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistItemScalarWhereInput = {
    AND?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    OR?: WatchlistItemScalarWhereInput[]
    NOT?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    createdAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    userId?: StringFilter<"WatchlistItem"> | string
    tickerId?: StringFilter<"WatchlistItem"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    watchlist?: WatchlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPortfoliosInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    sessions?: SessionCreateNestedManyWithoutUserInput
    watchlist?: WatchlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPortfoliosInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPortfoliosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
  }

  export type PortfolioHoldingCreateWithoutPortfolioInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticker: TickerCreateNestedOneWithoutHoldingsInput
  }

  export type PortfolioHoldingUncheckedCreateWithoutPortfolioInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickerId: string
  }

  export type PortfolioHoldingCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioHoldingWhereUniqueInput
    create: XOR<PortfolioHoldingCreateWithoutPortfolioInput, PortfolioHoldingUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioHoldingCreateManyPortfolioInputEnvelope = {
    data: PortfolioHoldingCreateManyPortfolioInput | PortfolioHoldingCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPortfoliosInput = {
    update: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPortfoliosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type UserUpdateWithoutPortfoliosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    sessions?: SessionUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPortfoliosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PortfolioHoldingUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioHoldingWhereUniqueInput
    update: XOR<PortfolioHoldingUpdateWithoutPortfolioInput, PortfolioHoldingUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioHoldingCreateWithoutPortfolioInput, PortfolioHoldingUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioHoldingUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioHoldingWhereUniqueInput
    data: XOR<PortfolioHoldingUpdateWithoutPortfolioInput, PortfolioHoldingUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioHoldingUpdateManyWithWhereWithoutPortfolioInput = {
    where: PortfolioHoldingScalarWhereInput
    data: XOR<PortfolioHoldingUpdateManyMutationInput, PortfolioHoldingUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type PortfolioHoldingScalarWhereInput = {
    AND?: PortfolioHoldingScalarWhereInput | PortfolioHoldingScalarWhereInput[]
    OR?: PortfolioHoldingScalarWhereInput[]
    NOT?: PortfolioHoldingScalarWhereInput | PortfolioHoldingScalarWhereInput[]
    id?: StringFilter<"PortfolioHolding"> | string
    quantity?: DecimalFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFilter<"PortfolioHolding"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    createdAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioHolding"> | Date | string
    portfolioId?: StringFilter<"PortfolioHolding"> | string
    tickerId?: StringFilter<"PortfolioHolding"> | string
  }

  export type PortfolioCreateWithoutHoldingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
  }

  export type PortfolioUncheckedCreateWithoutHoldingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PortfolioCreateOrConnectWithoutHoldingsInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
  }

  export type TickerCreateWithoutHoldingsInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlist?: WatchlistItemCreateNestedManyWithoutTickerInput
    dailyPrices?: DailyPriceCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutHoldingsInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlist?: WatchlistItemUncheckedCreateNestedManyWithoutTickerInput
    dailyPrices?: DailyPriceUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutHoldingsInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutHoldingsInput, TickerUncheckedCreateWithoutHoldingsInput>
  }

  export type PortfolioUpsertWithoutHoldingsInput = {
    update: XOR<PortfolioUpdateWithoutHoldingsInput, PortfolioUncheckedUpdateWithoutHoldingsInput>
    create: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutHoldingsInput, PortfolioUncheckedUpdateWithoutHoldingsInput>
  }

  export type PortfolioUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TickerUpsertWithoutHoldingsInput = {
    update: XOR<TickerUpdateWithoutHoldingsInput, TickerUncheckedUpdateWithoutHoldingsInput>
    create: XOR<TickerCreateWithoutHoldingsInput, TickerUncheckedCreateWithoutHoldingsInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutHoldingsInput, TickerUncheckedUpdateWithoutHoldingsInput>
  }

  export type TickerUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistItemUpdateManyWithoutTickerNestedInput
    dailyPrices?: DailyPriceUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistItemUncheckedUpdateManyWithoutTickerNestedInput
    dailyPrices?: DailyPriceUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type PortfolioHoldingCreateWithoutTickerInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutHoldingsInput
  }

  export type PortfolioHoldingUncheckedCreateWithoutTickerInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioId: string
  }

  export type PortfolioHoldingCreateOrConnectWithoutTickerInput = {
    where: PortfolioHoldingWhereUniqueInput
    create: XOR<PortfolioHoldingCreateWithoutTickerInput, PortfolioHoldingUncheckedCreateWithoutTickerInput>
  }

  export type PortfolioHoldingCreateManyTickerInputEnvelope = {
    data: PortfolioHoldingCreateManyTickerInput | PortfolioHoldingCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistItemCreateWithoutTickerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistItemUncheckedCreateWithoutTickerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WatchlistItemCreateOrConnectWithoutTickerInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutTickerInput, WatchlistItemUncheckedCreateWithoutTickerInput>
  }

  export type WatchlistItemCreateManyTickerInputEnvelope = {
    data: WatchlistItemCreateManyTickerInput | WatchlistItemCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type DailyPriceCreateWithoutTickerInput = {
    id?: string
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPriceUncheckedCreateWithoutTickerInput = {
    id?: string
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPriceCreateOrConnectWithoutTickerInput = {
    where: DailyPriceWhereUniqueInput
    create: XOR<DailyPriceCreateWithoutTickerInput, DailyPriceUncheckedCreateWithoutTickerInput>
  }

  export type DailyPriceCreateManyTickerInputEnvelope = {
    data: DailyPriceCreateManyTickerInput | DailyPriceCreateManyTickerInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioHoldingUpsertWithWhereUniqueWithoutTickerInput = {
    where: PortfolioHoldingWhereUniqueInput
    update: XOR<PortfolioHoldingUpdateWithoutTickerInput, PortfolioHoldingUncheckedUpdateWithoutTickerInput>
    create: XOR<PortfolioHoldingCreateWithoutTickerInput, PortfolioHoldingUncheckedCreateWithoutTickerInput>
  }

  export type PortfolioHoldingUpdateWithWhereUniqueWithoutTickerInput = {
    where: PortfolioHoldingWhereUniqueInput
    data: XOR<PortfolioHoldingUpdateWithoutTickerInput, PortfolioHoldingUncheckedUpdateWithoutTickerInput>
  }

  export type PortfolioHoldingUpdateManyWithWhereWithoutTickerInput = {
    where: PortfolioHoldingScalarWhereInput
    data: XOR<PortfolioHoldingUpdateManyMutationInput, PortfolioHoldingUncheckedUpdateManyWithoutTickerInput>
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutTickerInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutTickerInput, WatchlistItemUncheckedUpdateWithoutTickerInput>
    create: XOR<WatchlistItemCreateWithoutTickerInput, WatchlistItemUncheckedCreateWithoutTickerInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutTickerInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutTickerInput, WatchlistItemUncheckedUpdateWithoutTickerInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutTickerInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutTickerInput>
  }

  export type DailyPriceUpsertWithWhereUniqueWithoutTickerInput = {
    where: DailyPriceWhereUniqueInput
    update: XOR<DailyPriceUpdateWithoutTickerInput, DailyPriceUncheckedUpdateWithoutTickerInput>
    create: XOR<DailyPriceCreateWithoutTickerInput, DailyPriceUncheckedCreateWithoutTickerInput>
  }

  export type DailyPriceUpdateWithWhereUniqueWithoutTickerInput = {
    where: DailyPriceWhereUniqueInput
    data: XOR<DailyPriceUpdateWithoutTickerInput, DailyPriceUncheckedUpdateWithoutTickerInput>
  }

  export type DailyPriceUpdateManyWithWhereWithoutTickerInput = {
    where: DailyPriceScalarWhereInput
    data: XOR<DailyPriceUpdateManyMutationInput, DailyPriceUncheckedUpdateManyWithoutTickerInput>
  }

  export type DailyPriceScalarWhereInput = {
    AND?: DailyPriceScalarWhereInput | DailyPriceScalarWhereInput[]
    OR?: DailyPriceScalarWhereInput[]
    NOT?: DailyPriceScalarWhereInput | DailyPriceScalarWhereInput[]
    id?: StringFilter<"DailyPrice"> | string
    date?: DateTimeFilter<"DailyPrice"> | Date | string
    open?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntFilter<"DailyPrice"> | bigint | number
    createdAt?: DateTimeFilter<"DailyPrice"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPrice"> | Date | string
    tickerId?: StringFilter<"DailyPrice"> | string
  }

  export type UserCreateWithoutWatchlistInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    sessions?: SessionCreateNestedManyWithoutUserInput
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    name: string
    picture?: string | null
    verified?: boolean
    twoFactorEnabled?: boolean
    authMethod: $Enums.AuthMethod
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
  }

  export type TickerCreateWithoutWatchlistInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingCreateNestedManyWithoutTickerInput
    dailyPrices?: DailyPriceCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutWatchlistInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingUncheckedCreateNestedManyWithoutTickerInput
    dailyPrices?: DailyPriceUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutWatchlistInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutWatchlistInput, TickerUncheckedCreateWithoutWatchlistInput>
  }

  export type UserUpsertWithoutWatchlistInput = {
    update: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type UserUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    sessions?: SessionUpdateManyWithoutUserNestedInput
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TickerUpsertWithoutWatchlistInput = {
    update: XOR<TickerUpdateWithoutWatchlistInput, TickerUncheckedUpdateWithoutWatchlistInput>
    create: XOR<TickerCreateWithoutWatchlistInput, TickerUncheckedCreateWithoutWatchlistInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutWatchlistInput, TickerUncheckedUpdateWithoutWatchlistInput>
  }

  export type TickerUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUpdateManyWithoutTickerNestedInput
    dailyPrices?: DailyPriceUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUncheckedUpdateManyWithoutTickerNestedInput
    dailyPrices?: DailyPriceUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type TickerCreateWithoutDailyPricesInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingCreateNestedManyWithoutTickerInput
    watchlist?: WatchlistItemCreateNestedManyWithoutTickerInput
  }

  export type TickerUncheckedCreateWithoutDailyPricesInput = {
    id?: string
    symbol: string
    name: string
    type: $Enums.TickerType
    exchange?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: PortfolioHoldingUncheckedCreateNestedManyWithoutTickerInput
    watchlist?: WatchlistItemUncheckedCreateNestedManyWithoutTickerInput
  }

  export type TickerCreateOrConnectWithoutDailyPricesInput = {
    where: TickerWhereUniqueInput
    create: XOR<TickerCreateWithoutDailyPricesInput, TickerUncheckedCreateWithoutDailyPricesInput>
  }

  export type TickerUpsertWithoutDailyPricesInput = {
    update: XOR<TickerUpdateWithoutDailyPricesInput, TickerUncheckedUpdateWithoutDailyPricesInput>
    create: XOR<TickerCreateWithoutDailyPricesInput, TickerUncheckedCreateWithoutDailyPricesInput>
    where?: TickerWhereInput
  }

  export type TickerUpdateToOneWithWhereWithoutDailyPricesInput = {
    where?: TickerWhereInput
    data: XOR<TickerUpdateWithoutDailyPricesInput, TickerUncheckedUpdateWithoutDailyPricesInput>
  }

  export type TickerUpdateWithoutDailyPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUpdateManyWithoutTickerNestedInput
    watchlist?: WatchlistItemUpdateManyWithoutTickerNestedInput
  }

  export type TickerUncheckedUpdateWithoutDailyPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTickerTypeFieldUpdateOperationsInput | $Enums.TickerType
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUncheckedUpdateManyWithoutTickerNestedInput
    watchlist?: WatchlistItemUncheckedUpdateManyWithoutTickerNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    accessToken: string
    refreshToken: string
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickerId: string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: PortfolioHoldingUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: TickerUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioHoldingCreateManyPortfolioInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickerId: string
  }

  export type PortfolioHoldingUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: TickerUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type PortfolioHoldingUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioHoldingUncheckedUpdateManyWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickerId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioHoldingCreateManyTickerInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioId: string
  }

  export type WatchlistItemCreateManyTickerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DailyPriceCreateManyTickerInput = {
    id?: string
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioHoldingUpdateWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type PortfolioHoldingUncheckedUpdateWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioHoldingUncheckedUpdateManyWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemUpdateWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistItemUncheckedUpdateWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemUncheckedUpdateManyWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyPriceUpdateWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPriceUncheckedUpdateWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPriceUncheckedUpdateManyWithoutTickerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}