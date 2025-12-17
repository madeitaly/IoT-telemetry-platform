import type { User } from './generated/prisma/client.js';
/**
 * Hashes a plaintext password using bcrypt.
 * @param password The plaintext password.
 * @returns The hashed password string.
 */
export declare function hashPassword(password: string): Promise<string>;
/**
 * Compares a plaintext password with a hashed password.
 * @param password The plaintext password.
 * @param hash The stored hash.
 * @returns A boolean indicating if the passwords match.
 */
export declare function comparePassword(password: string, hash: string): Promise<boolean>;
/**
 * Creates a JSON Web Token (JWT) for a user.
 * @param userId The ID of the user.
 * @returns The signed JWT string.
 */
export declare function createToken(userId: number): string;
/**
 * Finds a user by their email address.
 */
export declare function findUserByEmail(email: string): Promise<User | null>;
/**
 * Finds a user by their ID.
 */
export declare function findUserById(id: number): Promise<User | null>;
/**
 * Creates a new user in the database.
 */
export declare function createUser(email: string, passwordHash: string): Promise<User>;
//# sourceMappingURL=auth.service.d.ts.map