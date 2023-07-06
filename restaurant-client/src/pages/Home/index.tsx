import {
  HomeContainer,
  Footer,
  Section,
  PageTitle,
  ContentContainer,
  Image,
} from "./styles";

import poster from "../../assets/pulp-fiction-cover-i1288.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <PageTitle>
        Welcome to Restaurantino, login to make your reservation!
      </PageTitle>

      <ContentContainer>
        <Section>
          <h3> Restaurantino: A Tale of Two Chefs</h3>
          <p>
            In the heart of the sprawling city of Los Angeles, amidst the neon
            signs and crowded sidewalks, stands an unassuming establishment
            known as Restaurantino. But this is no ordinary restaurant. The
            story of Restaurantino is as captivating as a Quentin Tarantino's
            cult classic, "Pulp Fiction". The story begins in the late 90s, when
            two young chef brothers, Vince and Jules Zeferino, found themselves
            jobless after a failed stint at a high-end LA restaurant. They found
            solace in their shared admiration for "Pulp Fiction" and an
            unwavering passion for cooking. Dreaming of a fresh start, they
            envisioned a restaurant that would capture the essence of their
            favorite film - unpredictable, thrilling, and unforgettable. With a
            little help from a mysterious benefactor known only as Marsellus,
            they opened Restaurantino. The small eatery quickly earned a
            reputation for its unexpected fusion of cuisines, serving dishes as
            diverse as the LA community itself. The menu, crafted with the same
            passion and creativity Tarantino put into his films, offered a
            memorable dining experience for anyone bold enough to walk through
            its doors. Just like in Pulp Fiction, where every character's story
            is intertwined in unexpected ways, the patrons at Restaurantino
            often find their lives crossing paths in the most intriguing
            manners. It's not uncommon to see a group of suits discussing
            business over a Royale with Cheese, an aging boxer reminiscing about
            his glory days over a plate of pork chops, or a pair of lovebirds
            sharing a $5 milkshake. The chefs, Vince and Jules, have maintained
            their love for the film throughout the years. It's rumored that on
            any given night, you might hear the line "Bonnie situation" when the
            kitchen gets too heated, or catch a glimpse of a gold watch, a
            tribute to the character of Butch, hanging by the counter. Now, over
            two decades since its inception, Restaurantino continues to be a
            haven for food lovers and Pulp Fiction fans alike. Its eclectic
            menu, vibrant atmosphere, and the underlying touch of cinematic
            brilliance offer a dining experience that's nothing short of a
            Tarantino masterpiece. Just like "Pulp Fiction", Restaurantino is
            timeless, reminding us that, in the end, "it's the little
            differences" that truly make a mark. Come to Restaurantino, where
            every meal tells a story.
          </p>
        </Section>

        <Image src={poster} alt="poster" />
      </ContentContainer>

      <Footer>
        <p>
          Contact us at this number for reservations or any other information:
          369 369 369 .
        </p>
        <p>Restaurantino by Zeferino. All rights reserved. &copy;</p>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
