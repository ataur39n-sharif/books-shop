import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from '../Components/Navbar';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../Redux/hook';
import { Link } from 'react-router-dom';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function DashBoard() {
    const [value, setValue] = React.useState(0);
    const ownBooklist = useAppSelector((state) => state.books.ownBookList)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <NavBar />
            <Container className='mt-5'>
                <Box
                    alignItems='center'
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="My books" {...a11yProps(0)} />
                        <Tab label="Wishlist" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <ul>
                            {
                                ownBooklist.map((book) => {
                                    return (
                                        <Link to={`/book/${book._id as string}`}>
                                            <li>{book.title}</li>
                                        </Link>
                                    )
                                })

                            }
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Box>
            </Container>
        </>
    );
}