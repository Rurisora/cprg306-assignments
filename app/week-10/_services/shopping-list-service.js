import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const snapshot = await getDocs(query(itemsRef));

        return snapshot.docs.map((doc) => ({
            id: doc.id, ...doc.data()
        }));
    } catch (error) {
        console.error("getItems error: ", error);
        throw error;
    }
}

export async function addItem(userId, item) {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);

        return docRef.id;
    } catch (error) {
        console.error("addItem error: ", error);
        throw error;
    }
}

export async function deleteItem(userId, itemId) {
    try {
        const itemRef = doc(db, "users", userId, "items", itemId);
        await deleteDoc(itemRef);
    } catch (error) {
        console.error("deleteItem error: ", error);
        throw error;
    }
}
