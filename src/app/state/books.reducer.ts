import { Book } from "../book-list/books.model";
import { BooksApiActions } from "./books.action";
import { createReducer,on } from '@ngrx/store'

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, ( _state, {books})=>books)
);

