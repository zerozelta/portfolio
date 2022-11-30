import {
  faBookBookmark,
  faHome,
  faLanguage,
  faStar,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundedButton from "../src/components/Button/RoundedButton";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-1 text-sm sm:text-lg">
      <div className="flex flex-col gap-2 p-2">
        <div className="sticky top-2 flex flex-col gap-2 text-blue-500">
          <RoundedButton dark size={40}>
            <FontAwesomeIcon icon={faUser} style={{ width: 22, height: 22 }} />
          </RoundedButton>
          <RoundedButton dark size={40}>
            <FontAwesomeIcon icon={faStar} style={{ width: 22, height: 22 }} />
          </RoundedButton>
          <RoundedButton dark size={40}>
            <FontAwesomeIcon
              icon={faTrophy}
              style={{ width: 22, height: 22 }}
            />
          </RoundedButton>
          <RoundedButton dark size={40}>
            <FontAwesomeIcon
              icon={faBookBookmark}
              style={{ width: 22, height: 22 }}
            />
          </RoundedButton>
          <RoundedButton dark size={40}>
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ width: 22, height: 22 }}
            />
          </RoundedButton>
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-full flex-1 m-auto max-w-[680px] gap-4 p-2">
        <div>Aldo César</div>
        <div className="flex p-2 rounded-full overflow-hidden bg-white border-4 border-slate-100">
          <img
            src="/static/img/photo.jpg"
            className="w-[125px] h-[125px] rounded-full"
          />
        </div>
        <div className="font-bold text-blue-500">FullStack developer</div>
        <div className="block w-full rounded-lg text-justify">
          <strong>Software developer Engineer</strong> by the Polytechnic
          University of Aguascalientes. Self-taught and programing learner since
          I was 13 years old. with experience mainly in{" "}
          <strong>software design architecture</strong> and{" "}
          <strong>web development technologies</strong>.
        </div>

        <div className="flex  flex-col gap-2">
          <p>
            <strong>Self-taught</strong>
            <p>
              Since I was a child I had interest on programming and began to
              learn on my own leading me to participate in local and
              international programing showcases.
            </p>
          </p>

          <p>
            <strong>Leadership</strong>
            <p>
              I am interested to contribute in projects that involves groups of
              people working together to improve leadership skills.
            </p>
          </p>

          <p>
            <strong>Creative</strong>
            <p>
              I really like challenging projects that require creative,
              efficient and functional solutions.
            </p>
          </p>
        </div>

        <div className="flex  flex-col gap-2">
          <h1 className="flex gap-2 text-lg text-blue-500 items-center">
            <FontAwesomeIcon icon={faStar} style={{ width: 15, height: 15 }} />
            Skills & Technologies
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            accusantium laudantium ut asperiores esse tenetur, libero obcaecati
            iste voluptates odit rem! Cumque ab, corporis perspiciatis excepturi
            nemo modi distinctio recusandae.
          </p>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptate, rem corrupti reiciendis reprehenderit
            dolorem quidem repellendus veritatis odio libero in earum sunt
            repudiandae rerum quasi magni repellat ipsum tenetur.
          </p>
        </div>
      </div>
    </div>
  );
}
