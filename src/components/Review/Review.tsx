import styles from './Review.module.css';
import { ReviewProps } from './Review.props';
import UserIcon from './User.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import cn from 'classnames';
import { Rating } from '../rating/rating';


export const Review = ({ review, className }: ReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;
    return (
        <div className={cn(
            styles.review,
            className
        )}>
            <UserIcon className={styles['review-icon']} />
            <div className={styles['review-title']}>
                <span className={styles['review-name']}>
                    {name}:
                </span>&nbsp;&nbsp;
                <span>
                    {title}
                </span>
            </div>
            <div className={styles['review-date']}>
                {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
            </div>
            <div className={styles['review-rating']}>
                <Rating rating={rating} />
            </div>
            <div className={styles['review-description']}>
                {description}
            </div>
        </div>
    );
};