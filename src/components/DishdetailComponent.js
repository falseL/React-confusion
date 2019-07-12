import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedDish: null
        };
    }

    renderDish(dish){
        if(dish != null){
            return(
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
                        <Card> 
                            <CardBody>
                                <CardText>{this.renderComments(this.props.dish.comments)}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(commentsArray){
        if (commentsArray != null){
            var month = new Array(12);
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            //const selectedDishComments = this.props.dish.comments.map((comment) => {
            const selectedDishComments = commentsArray.map((comment) => {
                let date = new Date(comment.date);
                let dateString =  month[date.getMonth()]+ ' ' + (date.getDate() + 1) + ', ' + date.getFullYear();
                    return(
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {dateString}</p>
                            </li>
                    )
            })
            return(
                <div>
                    <h4>Comments</h4>
                    <ul class = "list-unstyled">
                        {selectedDishComments}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        return this.renderDish(this.props.dish);
    }
}

export default Dishdetail;