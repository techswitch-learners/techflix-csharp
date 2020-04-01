import React, {FunctionComponent, useState} from "react";
import styles from "./SearchForm.module.scss";

export const SearchForm: FunctionComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
          <form>
              <input className={styles.input} type="text" placeholder="Search..." value={searchTerm} onChange={event => setSearchTerm(event.target.value)}/>
          </form>
      );
};