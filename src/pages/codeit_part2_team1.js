import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
const AlbumContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--foreground);
  font-family: "Noto Sans KR", sans-serif;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PhotoCard = styled.div`
  background: var(--background);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid var(--foreground);

  &:hover {
    transform: translateY(-5px);
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PhotoCaption = styled.div`
  padding: 1rem;
  font-family: "Noto Sans KR", sans-serif;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--foreground);
  }

  p {
    color: var(--foreground);
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    color: var(--foreground);
    margin-bottom: 1rem;
    font-family: "Noto Sans KR", sans-serif;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--foreground);
    margin: 1rem 0;
    line-height: 1.6;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const DiscordLink = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
    animation: bounce 2s linear infinite;
  }
`;

const Team1 = () => {
  const memories = [
    {
      id: 1,
      image: "/images/team15.png",
      title: "정하윤과 아이들",
      description: "정하윤과 아이들의 첫 데뷔무대",
    },
    {
      id: 2,
      image: "/images/team14.png",
      title: "힐링 캠프파이어",
      description: "따뜻한 모닥불 앞에서 우애를 나누며",
    },
    {
      id: 3,
      image: "/images/team13.png",
      title: "3팀 사무실",
      description: "3팀 팀원들과 함께",
    },
    {
      id: 4,
      image: "/images/team12.png",
      title: "2팀 사무실",
      description: "2팀 팀원들과 함께",
    },
    {
      id: 5,
      image: "/images/team11.png",
      title: "강태진과 아이들",
      description: "프로젝트의 성공을 축하하며",
    },
    {
      id: 6,
      image: "/images/team1.png",
      title: "게더에서도 함께",
      description: "밤낮없이 코딩하는 열정",
    },
  ];

  return (
    <>
      <Head>
        <title>1팀 추억앨범 - HAYOON</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AlbumContainer>
        <Title>코드잇 스프린트 파트2 1팀 추억앨범</Title>
        <PhotoGrid>
          {memories.map((memory) => (
            <PhotoCard key={memory.id}>
              <Photo src={memory.image} alt={memory.title} />
              <PhotoCaption>
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </PhotoCaption>
            </PhotoCard>
          ))}
        </PhotoGrid>
      </AlbumContainer>
      <MessageContainer>
        <DiscordLink>
          <Link href="https://discord.gg/WpjFRxHY">
            <img src="/images/discord.png" alt="CLICK HERE IMG" width={300} />
          </Link>
        </DiscordLink>
        <h1>수고하셨습니다!</h1>
        <h2>
          멋진 팀원들을 만나서 성공적으로 즐겁게 프로젝트를 진행할 수
          있었습니다.
        </h2>
        <h2>🙏🏻 ALL THE BEST 🙏🏻</h2>
      </MessageContainer>
    </>
  );
};

export default Team1;
