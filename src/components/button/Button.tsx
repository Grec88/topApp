import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({children, arrow='none', appearance, className, ...props}: ButtonProps): JSX.Element =>{
    const buttonProps = Object.assign({}, props);
    return(
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost'
        })} {...buttonProps}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
                </span>}
        </button>
    );
};