import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storage } from '../firebase-config';
// import { toast } from 'react-toastify';
import { deleteObject, ref } from 'firebase/storage';

export default function DeleteArticle({ id, imageUrl }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteDoc(doc(db, 'Articles', id));
        // toast('Article deleted successfully', { type: 'success' });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        // toast('Error deleting article', { type: 'error' });
        alert(error);
      }
    }
  };
  return (
    <div>
      <i
        className="fa fa-times"
        onClick={handleDelete}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
