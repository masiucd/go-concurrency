/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Comment: { // root type
    id: number; // Int!
    movie?: NexusGenRootTypes['Movie'] | null; // Movie
    movieId?: string | null; // String
    owner?: NexusGenRootTypes['User'] | null; // User
    ownerId?: string | null; // String
    text: string; // String!
  }
  Movie: { // root type
    comments?: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    id: number; // Int!
    image: string; // String!
    price: number; // Int!
    rating: number; // Int!
    releaseYear: number; // Int!
    title: string; // String!
  }
  Query: {};
  User: { // root type
    comments?: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    password: string; // String!
    role?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Comment: { // field return type
    id: number; // Int!
    movie: NexusGenRootTypes['Movie'] | null; // Movie
    movieId: string | null; // String
    owner: NexusGenRootTypes['User'] | null; // User
    ownerId: string | null; // String
    text: string; // String!
  }
  Movie: { // field return type
    comments: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    id: number; // Int!
    image: string; // String!
    price: number; // Int!
    rating: number; // Int!
    releaseYear: number; // Int!
    title: string; // String!
  }
  Query: { // field return type
    movie: NexusGenRootTypes['Movie'] | null; // Movie
    movies: Array<NexusGenRootTypes['Movie'] | null> | null; // [Movie]
  }
  User: { // field return type
    comments: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    password: string; // String!
    role: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  Comment: { // field return type name
    id: 'Int'
    movie: 'Movie'
    movieId: 'String'
    owner: 'User'
    ownerId: 'String'
    text: 'String'
  }
  Movie: { // field return type name
    comments: 'Comment'
    id: 'Int'
    image: 'String'
    price: 'Int'
    rating: 'Int'
    releaseYear: 'Int'
    title: 'String'
  }
  Query: { // field return type name
    movie: 'Movie'
    movies: 'Movie'
  }
  User: { // field return type name
    comments: 'Comment'
    email: 'String'
    firstName: 'String'
    id: 'Int'
    lastName: 'String'
    password: 'String'
    role: 'Int'
  }
}

export interface NexusGenArgTypes {
  Query: {
    movie: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}