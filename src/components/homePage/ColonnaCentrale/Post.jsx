import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    let date = new Date(post.createdAt);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return (
        <Card className='mb-3'>
            <Card.Body>
                <Card className='border border-0 mb-3'>
                    <Row>
                        <Col xs={3} md={2} lg={1}>
                            <Link to={`/profile/${post.user._id}`}>
                                <Card.Img variant="top" src={post.user.image} onError={(e)=>{
                                    e.currentTarget.src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                                }} className='rounded rounded-circle' style={{ aspectRatio: 1, width: '40px' }} alt={`Immagine di ${post.user.name} ${post.user.surname}`}/>
                            </Link>
                        </Col>
                        <Col xs={9} md={10} lg={11}>
                            <Link to={`/profile/${post.user._id}`} className='postUserName'>
                                <p className='m-0 fw-bold postUserName'>{post.user.name} {post.user.surname}</p>
                            </Link>
                            <small className='text-muted'>{post.user.title}</small>
                            <br></br>
                            <small className='text-muted'>{formattedDate}</small>
                        </Col>
                    </Row>
                </Card>
                <Card.Text>
                    {post.text}
                </Card.Text>
                {
                    post.image ? <Card.Img src={post.image} /> : null
                }
            </Card.Body>
            <Card.Footer>
                <Row xs={4}>
                    <Col className='px-0 text-center'>
                        <i class="bi bi-hand-thumbs-up me-2"></i>
                        <span className='d-none d-lg-inline'>Consiglia</span>
                    </Col>
                    <Col className='px-0 text-center'>
                        <i class="bi bi-chat-text me-2"></i>
                        <span className='d-none d-lg-inline'>Commenta</span>
                    </Col>
                    <Col className='px-0 text-center'>
                        <i class="bi bi-share me-2"></i>
                        <span className='d-none d-lg-inline'>Diffondi il post</span>
                    </Col>
                    <Col className='px-0 text-center'>
                        <i class="bi bi-send-fill me-2"></i>
                        <span className='d-none d-lg-inline'>Invia</span>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default Post;