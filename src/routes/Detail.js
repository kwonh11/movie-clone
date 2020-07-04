import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render () {
        const {location} = this.props;
        if (location.state) {
            console.log(location.state)
            const movie = location.state;
            return (
                <div className='detail'>
                    <img src={movie.poster} alt={movie.title} title={movie.title}/>
                    <div className='detail__data'>
                        <h2 className='detail__title'>{movie.title}</h2>
                        <h4 className='detail__year'>{movie.year}</h4>
                        <div className='detail__genres'>
                            {movie.genres.map((genre,index)=>{
                                return <span className='detail__genre' key={index}>{`#${genre}`}</span>
                            })}
                        </div>
                        <p className='detail__summary'>{movie.summary}</p>
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }
}

export default Detail;