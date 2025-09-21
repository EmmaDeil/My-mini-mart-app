import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Emmanuel O",
      position: "CEO",
      image: "/src/assets/CEO.jpg",
      socialLinks: {
        facebook: "https://facebook.com/david",
        twitter: "https://twitter.com/david",
        instagram: "https://instagram.com/david",
        linkedin: "https://linkedin.com/in/david",
        youtube: "https://youtube.com/@david",
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CTO",
      image: "/src/assets/man1.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarah",
        twitter: "https://twitter.com/sarah",
      },
    },
    {
      id: 3,
      name: "Mike Chen",
      position: "Head of Operations",
      image: "/src/assets/man1.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/mike",
        instagram: "https://instagram.com/mike",
      },
    },
    {
      id: 4,
      name: "Emma Wilson",
      position: "Marketing Director",
      image: "/src/assets/man1.png",
      socialLinks: {
        facebook: "https://facebook.com/emma",
        instagram: "https://instagram.com/emma",
        linkedin: "https://linkedin.com/in/emma",
      },
    },
  ];

  return (
    <section className="team-section">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-bold mb-3">Meet Our Team</h2>
          </div>
          <p className="aboutlead">
            Our team is composed of dedicated professionals with diverse
            backgrounds and expertise in facility management, technology, and
            customer service. We work collaboratively to deliver the best
            solutions for our clients.
          </p>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <TeamMemberCard
                image={member.image}
                name={member.name}
                position={member.position}
                socialLinks={member.socialLinks}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
