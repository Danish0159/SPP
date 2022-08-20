import React from "react";
import styled from "styled-components";
import DiamondIcon from "@mui/icons-material/Diamond";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AttractionsIcon from "@mui/icons-material/Attractions";

const cardsData = [
  {
    id: 1,
    title: "بعثة",
    line: "1. مهمتنا هي تسهيل التواجد عبر الإنترنت للمقاولين. 2. جعل المقاولين مسؤولين عن عملهم ومساعدتهم على الترويج لأعمالهم. 3. توفير وصول سهل للعملاء للوصول إلى مقاولين وشركات جيدة. 4. يمكن للمقاولين إنشاء و الانضمام إلى المجموعات ذات الصلة لتبادل الخبرات. 5. تقديم نظام اتفاق سهل وسريع عبر الإنترنت. ",
    icon: (
      <AttractionsIcon
        sx={{
          width: 40,
          height: 40,
        }}
      ></AttractionsIcon>
    ),
  },
  {
    id: 2,
    title: "رؤية",
    line: "تمكين المقاولين وصناعة البناء.",
    icon: (
      <DiamondIcon
        sx={{
          width: 40,
          height: 40,
        }}
      ></DiamondIcon>
    ),
  },
  // {
  //   id: 3,
  //   title: "تاريخ",
  //   line: " المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلف حقيقة وأساس تلف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بالمغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ",
  //   icon: (
  //     <HistoryEduIcon
  //       sx={{
  //         width: 40,
  //         height: 40,
  //       }}
  //     ></HistoryEduIcon>
  //   ),
  // },
];

function AboutDetails() {
  return (
    <Wrapper>
      {/* <div className="hero__grid">
        <h2 className="hero__title">
          مقدمي الخدمة <br></br> كوستوميد فقط من أجلك
        </h2>
        <div className="hero__content">
          <p className="hero__paragraph">
            المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
            التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو
            يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ
          </p>
        </div>
      </div> */}

      {cardsData.map((card) => {
        const { id, icon, title, line } = card;
        return (
          <div className="content__grid">
            <div key={id} className="content__item">
              {icon}
              <h1 className="content__title">{title}</h1>
              <p className="content__paragraph">{line} </p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default AboutDetails;

const Wrapper = styled.section`
  background-color: #c0c1cc;
  color: #424d83;
  min-height: 50vh;
  padding: 7rem 3rem;


  // .hero__grid {
  //   max-width: 110rem;
  //   margin: auto;
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  //   grid-gap: 4rem;
  // }
  // @media only screen and (max-width: 800px) {
  //   .hero__grid {
  //     grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  //     max-width: 100%;
  //     grid-gap: 6rem;
  //   }
  // }


  .content__grid {
    max-width: 110rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 4rem;
    margin-top: 6rem;
  }
  @media only screen and (max-width: 1150px) {
    .content__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }
  .content__item {
    background-color: #dedeeb;
    padding: 3rem 3rem;
    border-radius: 10px 10px 10px 10px;
    color: #424d83;
    box-shadow: 0px 10px 24px 6px rgb(0 0 0 / 6%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
  .content__item > * {
    margin-bottom: 1rem;
  }
  .content__paragraph {
    text-align: center;
    font-size: 1.6rem;
    color: #424d83;
    line-height: 1.5;
  }
  .content__title {
    font-weight: 800;
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
  .hero__title {
    font-weight: 800;
    font-size: 3rem;
    letter-spacing: 0.5px;
  }
  .hero__paragraph {
    font-size: 1.7rem;
    line-height: 1.8;
    font-weight: 400;
  }
`;
