const Profile = () => {
  return (
    <div className="border w-4/6 mx-auto flex flex-col-2 gap-5 p-6 mt-12 rounded-xl shadow-xl ">
      <div className="flex flex-col w-3/6">
        <h1 className="font-bold text-2xl text-center text-[#006769] italic">
          Arriety
        </h1>
        <span className=" text-sm text-center underline italic text-gray-600">
          The secret world of Arriety
        </span>
        <h2 className="font-semibold text-lg text-left text-[#006769] italic">
          Plot Summary
        </h2>
        <blockquote class="mb-3 mt-2">
          <p class="text-md italic font-semibold text-gray-900 ">
            " Sho moves into his great aunt's house and soon discovers the
            presence of tiny people, the Borrowers, living there. A 14-year-old
            Borrower named Arrietty strives to prove herself by helping her
            father gather materials that her family needs from Sho's new home.
            However, Arrietty and Sho meet, breaking the rule that humans must
            not know about the Borrowers' existence. As Sho and Arrietty's
            relationship develops, human interference endangers the Borrowers'
            lives. Arrietty and Sho work together to try and protect the
            Borrowers' way of life."
          </p>
        </blockquote>
      </div>
      <div className="flex flex-col-2 gap-2 ">
        <img src="ariety.jpeg" alt="ariety" className="h-96" />
        <img src="ariety2.jpeg" alt="ariety" className="h-96" />
      </div>
    </div>
  );
};

export default Profile;
