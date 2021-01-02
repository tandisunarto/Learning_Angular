import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';
import { OldBook } from 'app/models/oldBook';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Observable<Book[] | BookTrackerError> {
    // return this.http.get<Book[]>('/api/errors/500')
    return this.http.get<Book[]>('/api/books')
      .pipe(
        catchError(error => this.handleHttpError(error))
      );
  }
  
  handleHttpError(error: HttpErrorResponse): Observable<BookTrackerError> { 
    let dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occured retrieving data.";
    return throwError(dataError);

  }

  getBookById(id: number): Observable<Book> {
    let httpHeader: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token'
    });

    return this.http.get<Book>(`/api/books/${id}`, {
      headers: httpHeader
    });
  }

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`)
      .pipe(
        map(book => <OldBook>{
          bookTitle: book.title,
          year: book.publicationYear
        }),
        tap(oldBook => console.log('data service:', oldBook))
      );
  }

  addBook(book: Book): Observable<Book> {
    let httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Book>('/api/books', book, {
      headers: httpHeader
    });
  }

  updateBook(book: Book): Observable<void> {
    let httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<void>(`/api/books/${book.bookID}`, book, {
      headers: httpHeader
    });
  }

  deleteBook(bookID: number): Observable<void> {
     return this.http.delete<void>(`/api/books/${bookID}`);
  }
}
