import { Button, Switch, TextField } from "@mui/material";
import { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useLazyGetBooksQuery } from "../../../Redux/features/Books/booksApi";
import { useAppDispatch } from "../../../Redux/hook";
import { loadBooks } from "../../../Redux/features/Books/books.slice";

export default function SearchFilterComponent() {
    const [activeFilter, setActiveFilter] = useState(false)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState({
        genre: '',
        publicationDate: ''
    })
    const [searchQuery] = useLazyGetBooksQuery()
    return (
        <Row>
            <Col sm={12}>
                <TextField fullWidth label="Search by author name, book title and genre" id="fullWidth" onChange={({ target }) => setSearch(target.value)} />
            </Col>

            <Col sm={12} >
                <span><Switch defaultChecked={activeFilter} onChange={() => setActiveFilter(!activeFilter)} />Filter</span>
            </Col>
            {
                activeFilter && <Col sm={6} className="p-3">
                    <div className="bg-light p-3">
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={5}>
                                Genre (optional)
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control type="text" placeholder="Type a genre" onChange={({ target }) => setFilter({ ...filter, genre: target.value })} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={5}>
                                Publication Date (optional)
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control type="date" placeholder="select date" onChange={({ target }) => setFilter({ ...filter, publicationDate: target.value })} />
                            </Col>
                        </Form.Group>
                    </div>
                </Col>
            }
            <Col sm={12} className="text-center">
                {
                    activeFilter ?
                        <Button variant="contained" onClick={() => searchQuery(filter)}>Filter</Button>
                        :
                        <Button variant="contained" onClick={() => searchQuery({
                            search
                        })}>Search</Button>
                }
            </Col>

        </Row>
    )
}