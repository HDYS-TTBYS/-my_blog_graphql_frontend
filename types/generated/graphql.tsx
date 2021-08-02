import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type ArchiveAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccountPayload = {
  __typename?: 'ArchiveAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ArticleNode = Node & {
  __typename?: 'ArticleNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  userArticle: MyUserNode;
  title: Scalars['String'];
  tags: TagNodeConnection;
  content?: Maybe<Scalars['String']>;
  isRelease: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  liked: MyUserNodeConnection;
  articleComment: CommentNodeConnection;
};


export type ArticleNodeTagsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
};


export type ArticleNodeLikedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
};


export type ArticleNodeArticleCommentArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  userComment?: Maybe<Scalars['ID']>;
  articleComment?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleNodeConnection = {
  __typename?: 'ArticleNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleNodeEdge>>;
};

/** A Relay edge containing a `ArticleNode` and its cursor. */
export type ArticleNodeEdge = {
  __typename?: 'ArticleNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleNodeNodeConnection = {
  __typename?: 'ArticleNodeNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<ArticleNode>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommentNode = Node & {
  __typename?: 'CommentNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  userComment: MyUserNode;
  articleComment: ArticleNode;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CommentNodeConnection = {
  __typename?: 'CommentNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CommentNodeEdge>>;
};

/** A Relay edge containing a `CommentNode` and its cursor. */
export type CommentNodeEdge = {
  __typename?: 'CommentNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CommentNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CommentNodeNodeConnection = {
  __typename?: 'CommentNodeNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<CommentNode>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateArticleMutationInput = {
  title: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Scalars['String']>;
  isRelease: Scalars['Boolean'];
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateArticleMutationPayload = {
  __typename?: 'CreateArticleMutationPayload';
  article?: Maybe<ArticleNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCommentMutationInput = {
  text: Scalars['String'];
  articleComment: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCommentMutationPayload = {
  __typename?: 'CreateCommentMutationPayload';
  comment?: Maybe<CommentNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTagMutationInput = {
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTagMutationPayload = {
  __typename?: 'CreateTagMutationPayload';
  tag?: Maybe<TagNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type DeleteAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteArticleMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteArticleMutationPayload = {
  __typename?: 'DeleteArticleMutationPayload';
  article?: Maybe<ArticleNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCommentMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCommentMutationPayload = {
  __typename?: 'DeleteCommentMutationPayload';
  comment?: Maybe<CommentNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTagMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteTagMutationPayload = {
  __typename?: 'DeleteTagMutationPayload';
  tag?: Maybe<TagNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createTag?: Maybe<CreateTagMutationPayload>;
  updateTag?: Maybe<UpdateTagMutationPayload>;
  deleteTag?: Maybe<DeleteTagMutationPayload>;
  createArticle?: Maybe<CreateArticleMutationPayload>;
  updateArticle?: Maybe<UpdateArticleMutationPayload>;
  deleteArticle?: Maybe<DeleteArticleMutationPayload>;
  createComment?: Maybe<CreateCommentMutationPayload>;
  updateComment?: Maybe<UpdateCommentMutationPayload>;
  deleteComment?: Maybe<DeleteCommentMutationPayload>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<RegisterPayload>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccountPayload>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmailPayload>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordResetPayload>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChangePayload>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccountPayload>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccountPayload>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyTokenPayload>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshTokenPayload>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeTokenPayload>;
};


export type MutationCreateTagArgs = {
  input: CreateTagMutationInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagMutationInput;
};


export type MutationDeleteTagArgs = {
  input: DeleteTagMutationInput;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleMutationInput;
};


export type MutationUpdateArticleArgs = {
  input: UpdateArticleMutationInput;
};


export type MutationDeleteArticleArgs = {
  input: DeleteArticleMutationInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentMutationInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentMutationInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentMutationInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationVerifyAccountArgs = {
  input: VerifyAccountInput;
};


export type MutationResendActivationEmailArgs = {
  input: ResendActivationEmailInput;
};


export type MutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


export type MutationPasswordResetArgs = {
  input: PasswordResetInput;
};


export type MutationPasswordChangeArgs = {
  input: PasswordChangeInput;
};


export type MutationArchiveAccountArgs = {
  input: ArchiveAccountInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};


export type MutationVerifyTokenArgs = {
  input: VerifyTokenInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRevokeTokenArgs = {
  input: RevokeTokenInput;
};

export type MyUserNode = Node & {
  __typename?: 'MyUserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** この項目は必須です。半角アルファベット、半角数字、@/./+/-/_ で150文字以下にしてください。 */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** ユーザーが管理サイトにログイン可能かどうかを示します。 */
  isStaff: Scalars['Boolean'];
  /** ユーザーがアクティブかどうかを示します。アカウントを削除する代わりに選択を解除してください。 */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  userArticle: ArticleNodeConnection;
  liked: ArticleNodeConnection;
  userComment: CommentNodeConnection;
  password: Scalars['String'];
  /** 全ての権限を持っているとみなされます。 */
  isSuperuser: Scalars['Boolean'];
};


export type MyUserNodeUserArticleArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  userArticle?: Maybe<Scalars['ID']>;
  title_Icontains?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isRelease?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type MyUserNodeLikedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  userArticle?: Maybe<Scalars['ID']>;
  title_Icontains?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isRelease?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type MyUserNodeUserCommentArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  userComment?: Maybe<Scalars['ID']>;
  articleComment?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MyUserNodeConnection = {
  __typename?: 'MyUserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MyUserNodeEdge>>;
};

/** A Relay edge containing a `MyUserNode` and its cursor. */
export type MyUserNodeEdge = {
  __typename?: 'MyUserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<MyUserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebTokenPayload = {
  __typename?: 'ObtainJSONWebTokenPayload';
  token?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PageInfoExtra = {
  __typename?: 'PageInfoExtra';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
};

export type PasswordChangeInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  oldPassword: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChangePayload = {
  __typename?: 'PasswordChangePayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type PasswordResetInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordResetPayload = {
  __typename?: 'PasswordResetPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allTags?: Maybe<TagNodeNodeConnection>;
  allArticles?: Maybe<ArticleNodeNodeConnection>;
  allComments?: Maybe<CommentNodeNodeConnection>;
  me?: Maybe<UserNode>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryAllTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ordering?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
};


export type QueryAllArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ordering?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  userArticle?: Maybe<Scalars['ID']>;
  title_Icontains?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isRelease?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryAllCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ordering?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  userComment?: Maybe<Scalars['ID']>;
  articleComment?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type ResendActivationEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmailPayload = {
  __typename?: 'ResendActivationEmailPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RevokeTokenInput = {
  refreshToken: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeTokenPayload = {
  __typename?: 'RevokeTokenPayload';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SendPasswordResetEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TagNode = Node & {
  __typename?: 'TagNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  tag: ArticleNodeConnection;
};


export type TagNodeTagArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  userArticle?: Maybe<Scalars['ID']>;
  title_Icontains?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isRelease?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TagNodeConnection = {
  __typename?: 'TagNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TagNodeEdge>>;
};

/** A Relay edge containing a `TagNode` and its cursor. */
export type TagNodeEdge = {
  __typename?: 'TagNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TagNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TagNodeNodeConnection = {
  __typename?: 'TagNodeNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<TagNode>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UpdateAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateArticleMutationInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content: Scalars['String'];
  isRelease: Scalars['Boolean'];
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateArticleMutationPayload = {
  __typename?: 'UpdateArticleMutationPayload';
  article?: Maybe<ArticleNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCommentMutationInput = {
  id: Scalars['ID'];
  text: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCommentMutationPayload = {
  __typename?: 'UpdateCommentMutationPayload';
  comment?: Maybe<CommentNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTagMutationInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTagMutationPayload = {
  __typename?: 'UpdateTagMutationPayload';
  tag?: Maybe<TagNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** この項目は必須です。半角アルファベット、半角数字、@/./+/-/_ で150文字以下にしてください。 */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** ユーザーが管理サイトにログイン可能かどうかを示します。 */
  isStaff: Scalars['Boolean'];
  /** ユーザーがアクティブかどうかを示します。アカウントを削除する代わりに選択を解除してください。 */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  userArticle: ArticleNodeConnection;
  liked: ArticleNodeConnection;
  userComment: CommentNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeUserArticleArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  userArticle?: Maybe<Scalars['ID']>;
  title_Icontains?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isRelease?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeLikedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  userArticle?: Maybe<Scalars['ID']>;
  title_Icontains?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isRelease?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeUserCommentArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  userComment?: Maybe<Scalars['ID']>;
  articleComment?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type VerifyAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccountPayload = {
  __typename?: 'VerifyAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type VerifyTokenInput = {
  token: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyTokenPayload = {
  __typename?: 'VerifyTokenPayload';
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserNode' }
    & Pick<UserNode, 'id' | 'username' | 'isStaff' | 'email' | 'verified'>
  )> }
);


export const MeDocument = gql`
    query me {
  me {
    id
    username
    isStaff
    email
    verified
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;