import { Box, Divider, Stack, Typography, Container } from "@mui/material";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Tiles from "../components/Tiles";

export default function Home() {
    const slides = [
        {
            bg: "./galaxy1.jpg",
            title: "Title 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: 'primary',
            color: '#fff',
        },
        {
            bg: "./cave2.jpg",
            title: "Title 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: 'secondary',
            color: '#fff',
        },
        {
            bg: "./home3.jpg",
            title: "Title 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: 'tertiary',
            color: '#fff',
        },
        {
            bg: "./ocean4.jpg",
            title: "Title 4",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti voluptate laboriosam iusto saepe laborum et, iure dolores quibusdam ad est non fuga quasi quas, blanditiis, culpa sunt asperiores magni.",
            titleColor: 'quaternary',
            color: '#fff',
        },
    ];

    return (
        <>
            <Stack direction={"column"}>
                <Carousel slides={slides} time={5000} />
                <Stack id={'intro'}
                    sx={{
                        width: "100%",
                        height: "100%",
                        padding: '5vh 0',
                    }}
                    className="radialbg"
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Stack
                        sx={{
                            border: "3px solid black",
                            padding: "2% 3%",
                            borderRadius: "32px",
                            backgroundColor: "#fff",
                            maxWidth: '80vw'
                        }}
                        direction={"column"}
                        gap={3}
                    >
                        <Stack direction={"column"} gap={1}>
                            <Typography
                                variant="h1"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={{xs:"3em", sm:"6em"}}
                                color="primary"
                            >
                                Learn beyond limits
                            </Typography>
                            <Typography
                                variant="p"
                                textAlign={{ xs: "center", sm: "left" }}
                                color="black_blue"
                                fontSize={{xs: ".7em",sm:"1em"}}
                            >
                                Rumah Ilmiah provides a comprehensive stream of
                                knowledge that is easy to access, anytime,
                                anywhere.
                            </Typography>
                        </Stack>
                        <Stack sx={{ alignItems: { xs: "center", sm: "end" } }}>
                            <Button
                                color={"#fff"}
                                bgcolor={"primary.main"}
                                bdcolor={"#000"}
                                sx={{ width: "8em", height: "3.5em", p: 2 }}
                            >
                                More Info
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack id={'content'} gap={{xs:2, sm:0}}>
                    <Stack
                        direction={'column'}
                        gap={2}
                        sx={{
                            padding: '2% 3%'
                        }}
                        justifyContent={'center'}
                    >
                        <Stack>
                            <Stack
                                direction={'column'}
                                alignItems={{xs:'center', sm:'flex-start'}}
                            >
                                <Stack 
                                    className="col-auto" 
                                    direction={'column'}
                                    alignItems={"flex-start"}
                                    sx={{width: "fit-content"}}
                                >
                                    <Typography
                                        variant="h2"
                                        textAlign={{ xs: "center", sm: "justify" }}
                                        component={"h1"}
                                        fontSize={{xs: "3em",sm:"4.5em"}}
                                        color="primary"
                                    >
                                        Title
                                    </Typography>
                                    <Divider sx={{borderWidth:'.3vh', width:'100%'}} />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Typography
                            variant="p"
                            textAlign={"justify"}
                            color="black_blue"
                            fontSize={{xs: ".7em",sm:"1em"}}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque corrupti voluptate laboriosam iusto saepe laborum et, 
                            iure dolores quibusdam ad est non fuga quasi quas, blanditiis, 
                            culpa sunt asperiores magni.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Obcaecati nihil animi fugit incidunt architecto quod cupiditate 
                            facere pariatur porro odio, laudantium voluptas dolorem, 
                            atque molestiae earum tempore, necessitatibus quia a!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque corrupti voluptate laboriosam iusto saepe laborum et, 
                            iure dolores quibusdam ad est non fuga quasi quas, blanditiis, 
                            culpa sunt asperiores magni.
                        </Typography>
                    </Stack>
                    <Stack
                        direction={'column'}
                        gap={1}
                        sx={{
                            padding: '2% 3%'
                        }}
                        justifyContent={'center'}
                    >
                        <Stack
                            direction={'column'}
                            alignItems={{xs:'center', sm:'flex-start'}}
                        >
                            <Stack 
                                className="col-auto" 
                                direction={'column'}
                                alignItems={"flex-start"}
                                sx={{width: "fit-content"}}
                            >
                                <Typography
                                    variant="h3"
                                    textAlign={{ xs: "center", sm: "justify" }}
                                    component={"h1"}
                                    fontSize={{xs: "2.5em",sm:"3.5em"}}
                                    color="secondary"
                                    sx={{
                                        width: "fit-content",
                                    }}
                                >
                                    Subtitle
                                </Typography>
                                <Divider sx={{borderWidth:'.3vh', width:'100%'}} />
                            </Stack>
                        </Stack>
                        <Typography
                            variant="p"
                            textAlign={"justify"}
                            color="black_blue"
                            fontSize={{xs: ".7em",sm:"1em"}}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque corrupti voluptate laboriosam iusto saepe laborum et, 
                            iure dolores quibusdam ad est non fuga quasi quas, blanditiis, 
                            culpa sunt asperiores magni.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Obcaecati nihil animi fugit incidunt architecto quod cupiditate 
                            facere pariatur porro odio, laudantium voluptas dolorem, 
                            atque molestiae earum tempore, necessitatibus quia a!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque corrupti voluptate laboriosam iusto saepe laborum et, 
                            iure dolores quibusdam ad est non fuga quasi quas, blanditiis, 
                            culpa sunt asperiores magni.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack id={'accordion'}>
                    <Stack sx={{padding: '2% 3%'}} gap={2}>
                        <Stack>
                            <Typography
                                variant="h2"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={{xs: "3em",sm:"4.5em"}}
                                color="primary"
                            >
                                Question
                            </Typography>
                            <Divider sx={{borderWidth:'.3vh',}} />
                        </Stack>
                        <Stack gap={2}>
                            <Stack gap={2} direction={'row'} flexWrap={'wrap'}>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                    <Accordion 
                                        question={'What is Rumah Ilmiah'}
                                        answer={'Rumah Ilmiah is the best place who seek knowledge and science'}
                                        bgcolor_title={'primary.main'}
                                        color_title={'#fff'}
                                        bgcolor_text={'#fff'}
                                        color_text={'primary'}
                                        bdcolor={'#000'}
                                    />
                                </Stack>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                    <Accordion 
                                        question={'What is Rumah Ilmiah'}
                                        answer={'Rumah Ilmiah is the best place who seek knowledge and science'}
                                        bgcolor_title={'secondary.main'}
                                        color_title={'#fff'}
                                        bgcolor_text={'#fff'}
                                        color_text={'secondary'}
                                        bdcolor={'#000'}
                                    />
                                </Stack>
                            </Stack>
                            <Stack gap={2} direction={'row'} flexWrap={'wrap'}>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                    <Accordion 
                                        question={'What is Rumah Ilmiah'}
                                        answer={'Rumah Ilmiah is the best place who seek knowledge and science'}
                                        bgcolor_title={'tertiary.main'}
                                        color_title={'#fff'}
                                        bgcolor_text={'#fff'}
                                        color_text={'tertiary'}
                                        bdcolor={'#000'}
                                    />
                                </Stack>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                    <Accordion 
                                        question={'What is Rumah Ilmiah'}
                                        answer={'Rumah Ilmiah is the best place who seek knowledge and science'}
                                        bgcolor_title={'quaternary.main'}
                                        color_title={'#fff'}
                                        bgcolor_text={'#fff'}
                                        color_text={'quaternary'}
                                        bdcolor={'#000'}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack id={'accordion'}>
                    <Stack sx={{padding: '2% 3%'}} gap={2}>
                        <Stack>
                            <Typography
                                variant="h2"
                                textAlign={{ xs: "center", sm: "left" }}
                                component={"h1"}
                                fontSize={{xs: "3em",sm:"4.5em"}}
                                color="primary"
                            >
                                Overview
                            </Typography>
                            <Divider sx={{borderWidth:'.3vh',}} />
                        </Stack>
                        <Stack gap={2}>
                            <Stack gap={2} direction={'row'} flexWrap={'wrap'}>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                    <Tiles 
                                        bg={'./galaxy1.jpg'} 
                                        bgcolor={'primary.main'}
                                        bdcolor={'#000'}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Galaxy
                                        </Typography>
                                    </Tiles>
                                </Stack>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                <Tiles 
                                        bg={'./cave2.jpg'} 
                                        bgcolor={'secondary.main'}
                                        bdcolor={'#000'}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Cave
                                        </Typography>
                                    </Tiles>
                                </Stack>
                            </Stack>
                            <Stack gap={2} direction={'row'} flexWrap={'wrap'}>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                <Tiles 
                                        bg={'./home3.jpg'} 
                                        bgcolor={'tertiary.main'}
                                        bdcolor={'#000'}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Home
                                        </Typography>
                                    </Tiles>
                                </Stack>
                                <Stack className="col" justifyContent={'center'} alignItems={'center'}>
                                <Tiles 
                                        bg={'./ocean4.jpg'} 
                                        bgcolor={'quaternary.main'}
                                        bdcolor={'#000'}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Ocean
                                        </Typography>
                                    </Tiles>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
