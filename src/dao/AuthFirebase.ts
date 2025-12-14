import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Student } from '../dto/student';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

class AuthDao {
    auth: Auth;

    constructor(app: FirebaseApp) {
        this.auth = getAuth(app);
    }

    async createUserWithEmailAndPassword({
        email,
        password
    }: {
        email: string;
        password: string;
    }): Promise<Student> {
        const userCredential = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        );
        const student: Student = {
            email: userCredential.user.email || '',
            id: userCredential.user.uid
        };
        return student;
    }

    async signInWithEmailAndPassword({
        email,
        password
    }: {
        email: string;
        password: string;
    }): Promise<Student> {
        const userCredential = await signInWithEmailAndPassword(
            this.auth,
            email,
            password
        );
        const student: Student = {
            email: userCredential.user.email || '',
            id: userCredential.user.uid
        };

        return student;
    }

    getCurrentUser(): Student | undefined {
        if (!this.auth.currentUser) {
            return;
        }
        const student: Student = {
            email: this.auth.currentUser.email || '',
            id: this.auth.currentUser.uid
        };
        return student;
    }
}

let repository: AuthDao;
export const getAuthDao = (
    app: FirebaseApp | undefined
): AuthDao => {
    if (!repository && app) {
        repository = new AuthDao(app);
    }
    return repository;
};
