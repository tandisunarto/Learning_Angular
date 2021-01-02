import { DataService } from "./data.service";
import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";
import { Book } from "app/models/book";
import { TestBed } from "@angular/core/testing";
import { BookTrackerError } from "app/models/bookTrackerError";

describe('DataService Tests', () => {

	let dataService: DataService;
	let httpTestingController: HttpTestingController;

	let testBooks: Book[] = [
		{
			"bookID": 1,
			"title": "Goodnight Moon",
			"author": "Margaret Wise Brown",
			"publicationYear": 1953
		},
		{
			"bookID": 2,
			"title": "Winnie-the-Pooh",
			"author": "A. A. Milne",
			"publicationYear": 1926
		},
		{
			"bookID": 3,
			"title": "Where the Wild Things Are",
			"author": "Maurice Sendak",
			"publicationYear": 1963
		},
	];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [ DataService ]
		})

		dataService = TestBed.get(DataService);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	})

	it('should GET all books', () => {
		dataService.getAllBooks()
			.subscribe(
				(books: Book[]) => { 
					expect(books.length).toBe(3);
			});

		let booksRequest: TestRequest = httpTestingController.expectOne("/api/books");
		expect(booksRequest.request.method).toEqual("GET");

		booksRequest.flush(testBooks);
	})

	it('should return a BookTrackerError', () => {
		dataService.getAllBooks()
			.subscribe(
				(books: Book[]) => fail("this should have thrown an error"),
				(error: BookTrackerError) => {
					expect(error.errorNumber).toEqual(100);
					expect(error.friendlyMessage).toEqual("An error occured retrieving data.");
				}
			);

		let bookRequest: TestRequest = httpTestingController.expectOne("/api/books");

		bookRequest.flush("error", {
			status: 500,
			statusText: "Server Error Test"
		})
	})	
})