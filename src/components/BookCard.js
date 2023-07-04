import React from 'react';

const BookCard = ({ author, title, rating, price, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Rating: {rating}</p>
    <p>Price: ${price}</p>
  </div>
);

const BookList = () => {
    const books = [
        {
          author: 'J.K. Rowling',
          title: 'Harry Potter and the Sorcerer\'s Stone',
          rating: 4.8,
          price: 1299,
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.moviesanywhere.com%2F143cdb987186a1c8f94d4f18de211216%2Ffdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg&tbnid=7LUKF2x549loAM&vet=12ahUKEwj8xaT1tvT_AhWPmicCHSdQB5AQMygBegUIARDnAQ..i&imgrefurl=https%3A%2F%2Fmoviesanywhere.com%2Fmovie%2Fharry-potter-and-the-sorcerers-stone&docid=MQmfv63fL9UtvM&w=2000&h=3000&itg=1&q=harry%20potter%20and%20the%20sorcerer%27s%20stone&ved=2ahUKEwj8xaT1tvT_AhWPmicCHSdQB5AQMygBegUIARDnAQ'
        },
        {
          author: 'George Orwell',
          title: '1984',
          rating: 4.6,
          price: 999,
          image: 'https://alinino.az/product/1984-d2b2cf?lang=en'
        },
        {
          author: 'Jane Austen',
          title: 'Pride and Prejudice',
          rating: 4.5,
          price: 899,
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Froyalreadingroom.uk%2Fwp-content%2Fuploads%2F2022%2F04%2FJane-Austen-Pride-And-Prejudice-Book-Cover.jpg&tbnid=8rlvLcMMdzoooM&vet=12ahUKEwihkfTDt_T_AhWRnCcCHftOAxIQMygCegUIARDsAQ..i&imgrefurl=https%3A%2F%2Froyalreadingroom.uk%2Fbooks%2Fpride-and-prejudice%2F&docid=MENlNZ3QuKRxAM&w=247&h=400&q=pride%20and%20prejudice%20book%20cover&ved=2ahUKEwihkfTDt_T_AhWRnCcCHftOAxIQMygCegUIARDsAQ'
        },
        {
          author: 'F. Scott Fitzgerald',
          title: 'The Great Gatsby',
          rating: 4.4,
          price: 799,
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Famericanwritersmuseum.org%2Fwp-content%2Fuploads%2F2018%2F02%2FCK-3.jpg%3Fresize%3D267%252C400%26ssl%3D1&tbnid=qn6OAJsEiww1dM&vet=12ahUKEwilnKvSt_T_AhVInCcCHZaUAkAQMygAegUIARDqAQ..i&imgrefurl=https%3A%2F%2Famericanwritersmuseum.org%2Fstories-behind-classic-book-covers-the-great-gatsby%2F&docid=xlHDLOJviJ5ujM&w=267&h=400&q=the%20great%20gatsby%20cover&ved=2ahUKEwilnKvSt_T_AhVInCcCHZaUAkAQMygAegUIARDqAQ'
        },
        {
          author: 'Harper Lee',
          title: 'To Kill a Mockingbird',
          rating: 4.7,
          price: 1099,
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F21%2F182021-050-666DB6B1%2Fbook-cover-To-Kill-a-Mockingbird-many-1961.jpg&tbnid=coWaXJoqOUNKsM&vet=12ahUKEwitvM7kt_T_AhVGnCcCHQmeDzkQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2FTo-Kill-a-Mockingbird&docid=odg2W8eUZXg0bM&w=990&h=1600&q=to%20kill%20a%20mockingbird%20cover&ved=2ahUKEwitvM7kt_T_AhVGnCcCHQmeDzkQMygBegUIARDjAQ'
        },
        {
          author: 'Ernest Hemingway',
          title: 'The Old Man and the Sea',
          rating: 4.3,
          price: 699,
          image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZDQ1YjZiYzItOGUwMS00Y2FhLWJiYjgtYzY3MjdhMjdlMzU4XkEyXkFqcGdeQXVyNjc5NjEzNA%40%40._V1_.jpg&tbnid=Tjsj_Vw8jrW-TM&vet=12ahUKEwiwharvt_T_AhWIuicCHUB6CzMQMygBegUIARDrAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0207639%2F&docid=9sAEJ6G2qsb4lM&w=1500&h=2090&q=the%20old%20man%20and%20the%20sea&ved=2ahUKEwiwharvt_T_AhWIuicCHUB6CzMQMygBegUIARDrAQ'
        }
      ];

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={index}
          author={book.author}
          title={book.title}
          rating={book.rating}
          price={book.price}
          image={book.image}
        />
      ))}
    </div>
  );
};

export default BookList;
