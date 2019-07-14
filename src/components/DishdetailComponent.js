import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card key={dish.id}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <p>{this.renderComments(this.props.dish.comments)}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComments(commentsArray) {
        if (commentsArray != null) {
            const selectedDishComments = commentsArray.map((comment) => {
                let date = new Date(comment.date);
                let dateString = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(date)
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {dateString}</p>
                    </li>
                )
            })
            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {selectedDishComments}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        return (
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        )
    }
}

export default Dishdetail;