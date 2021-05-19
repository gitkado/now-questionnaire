import {Button, Drawer} from "@material-ui/core";
import {List} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {Auth} from "aws-amplify";

function Sidebar() {
    const signOut = () => {
        Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem key='logout'>
                    <ListItemText primary={
                        <Button
                            variant="outlined"
                            onClick={signOut}
                            fullWidth
                        >
                            Logout
                        </Button>
                    }/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar;