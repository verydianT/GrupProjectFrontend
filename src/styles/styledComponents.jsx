import styled from "styled-components";

const ImageSmall = styled.img`
  /* This renders the buttons above... Edit me! */
  height: 100%;
  width: 80%;
  padding-bottom: 15px;
  object-fit: cover;
  border-radius: 3%;
`;

const ImageLarge = styled.img`
  height: 530px;
  width: 100%;
  margin-left: -60px;
  padding-bottom: 10px;
  object-fit: cover;
`;

const Div = styled.div`
  margin-bottom: 200px;
`;

const H4 = styled.h4`
  margin-left: -35px;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 0.5em;
`;

const H5 = styled.h5`
  margin-left: -35px;
  font-weight: 600;
  font-size: 18px;
`;

const P = styled.p`
  margin-left: -35px;
  font-size: 16px;
  padding-bottom: 5px;
`;

const Margin = styled.div`
  margin-left: -35px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  justify-content: ${(props) => props.align || "center"};
`;

export { ImageLarge, ImageSmall, Div, H4, H5, P, Margin, FlexContainer };
