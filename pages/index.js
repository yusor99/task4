import Link from 'next/link'
import Header from './header.js'
import Footer from './footer.js'
import Card from './card.js'
import Card2 from './card2.js'

const home = () => {
  return (
    <>
    <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/></head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
     <Header/>
      <section className=" container info">
<h1>A blog for people who like simple food</h1>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
      <button className="btn-id" ><a href="#section-cards">See popular recipes</a></button>
      </section>
      <section className="container">
        <div className=" cards">
         <Card/>
         <Card/>
         <Card/>
        </div>
      </section><br></br><br></br>
<section className="container">
  <div className="cards" id="section-cards">
    <Card2 />
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
  </div>
</section>
     <Footer/>
     
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../jq.js"></script>
 </>);
};
export default home;
