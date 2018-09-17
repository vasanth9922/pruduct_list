import React from 'react';
import ReactDOM from 'react-dom'


class Product extends React.Component {

    constructor(){
        super()

        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    upVote() {
        console.log("upvote");
        //this.setState({vote: (this.state.vote+1)})
        this.props.onCheck(this.props.id);
    }

    downVote() {
        console.log("downvote");
        //this.setState({vote: (this.state.vote-1)})
        this.props.onCheck(this.props.id, 0)
    }
   
    render() {

        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.prodImage} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                    {this.props.vote}
                    <a>
                        <i onClick={this.upVote} className="large caret up icon"/>
                    </a>
                    <a>
                        <i onClick={this.downVote} className="large caret down icon"/>
                    </a>
                    </div>
                    <div className="description">
                        <a>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted By...</span>
                        <img src={this.props.avatarUrl} className="ui avatar image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;