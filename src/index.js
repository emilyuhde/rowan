import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import map from "../assets/park-map.png";

class App extends React.Component {
  render() {
    const {
      name,
      age,
      date,
      time
    } = this.props;

    return (
      <>
        <h1>Happy Birthday, {name}! 🎂🎉</h1>
        <p>{name} is turning <u>{age} years old</u>! Please join us to celebrate his birthday!</p>

        <h2>When</h2>
        <p>
          {date}<br/>{time}
        </p>

        <h2>Where</h2>
        <p>
          Brighton Town Park<br/>
          Pavillion #1<br/>
          777 Westfall Rd. Rochester, NY
        </p>
        <p>We will be in the pavillion, not the lodge, right next to the parking lot off of
          Haudenosaunee Trail. There is a playground near by that everyone can use and a field
          to run and play on. Restrooms are available near the pavillion. Be aware that
          the lodge is near a pond so please keep an eye on your little ones!
        </p>
        <a href="https://goo.gl/maps/gAfXn7nSYiJWot9t8">
          <img
            src={map}
            alt="Google maps location of Brighton Town Park pavillion 1"
          />
        </a>

        <h2>RSVP</h2>
        <p>By September 6 please</p>
        <p>to Emily 360-521-7834 or Andrew 360-521-3365</p>

        <h2>About {name}</h2>
        <ul>
          <li>{name}'s favorite colors are blue and pink</li>
          <li>{name}'s favorite toy is Bunny, a gray plush rabbit</li>
          <li>{name} loves riding his push bike, reading books, doing art, and going for walks</li>
        </ul>

        <h2>{name}'s Wish List</h2>
        <p>If you wish to bring a birthday gift for {name}, here are some ideas.</p>
        <ul>
          <li>Magna-Tiles</li>
          <li><a href="hhttps://www.schleich-s.com/en/US/farm-world.html?product_list_dir=asc">Animal figures</a>, especially rabbits and chickens</li>
          <li>Books, especially...</li>
            <ul>
              <li><a href="https://www.barnesandnoble.com/s/the%20dinosaur%20that%20pooped/">The Dinosaur That Pooped series</a></li>
              <li>Any books by <a href="https://www.barnesandnoble.com/s/Herv%C3%A9%20Tullet">Hervé Tullet</a></li>
              <li><a href = "https://www.fatbraintoys.com/toy_companies/fox_chapel_publishing/over_1000_awesome_animals_and_objects_seek_and_find_puzzle_book.cfm" >Finding</a> <a href="https:/ / www.fatbraintoys.com / toy_companies / fox_chapel_publishing / find_me_adventures_in_the_ocean.cfm">items</a> <a  href="https://www.barnesandnoble.com/w/i-spy-an-egg-in-a-nest-jean-marzollo/1100569232?ean=9780545220934">books</a></li>
              <li><a href="https://www.amazon.com/Thousand-Spanish-Cartwright-illustrator-Mackinnon/dp/140958304X/ref=sr_1_1?crid=2XRLVIU7K8PW1&keywords=first+1000+words+in+spanish&qid=1659907766&s=books&sprefix=first+1000+words+in+spanish%2Cstripbooks%2C117&sr=1-1">Spanish picture dictionary</a></li>
              <li><a href="https://www.amazon.com/dp/B08LQWZCV4?binding=hardcover&ref=dbs_dp_rwt_sb_pc_thcv">The Questioneers book series</a></li>
            </ul>
          <li>Puzzles (45+ pieces)</li>
          <li>A kite</li>
          <li>Art Supplies</li>
            <ul>
              <li>Painting and drawing paper</li>
              <li>Acrylic paints and brushes</li>
              <li>Stickers</li>
              <li>Washable markers and stamps</li>
            </ul>
          <li>Play-Doh and Play-Doh toys</li>
          <li>An Etch A Sketch</li>
          <li><a href="https://www.walmart.com/ip/Adventure-Force-Radio-Control-2-4G-Tyranno-Mech-Stunt-Car/110805132">This dinosaur car</a></li>
        </ul>
        <p><em>Second hand toys and books are great!</em></p>
      </>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(
  <App
    name="Rowan"
    age="4"
    date="Saturday, September 10"
    time="1:00 - 4:00 pm"
  />
, mountNode);