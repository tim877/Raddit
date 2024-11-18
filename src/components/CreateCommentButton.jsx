import React, {useState} from `react`;

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
 } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

export default function CommentPopup (){
    const [auther, setAuthor] = useState ('');
    const [heading, setHeding] = useState ('');
    const [body, setBody] = useState ('');
    const [tags, setTags] = useState (['','','']);
}

const handelTagChange = (index, value) => {
    const newTag = [...tags];
    newTags[index] = value;
    setTags(newTags);
};

//If error it might not be "tag.TRIM"
const handelSubmit = () => {
    console.log({
        auther, heding, body, tags: tags.filter(tag => tag.trim() !== '')
    });
}

return (
    <Dialog>
      <DialogTrigger >
        <Button>Add Comment</Button>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Add New Comment</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <label htmlFor="author" className="text-right">
              Author
            </label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div >
            <label htmlFor="heading" className="text-right">
              Heading
            </label>
            <Input
              id="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div >
            <label htmlFor="body" className="text-right">
              Body
            </label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div >
            <label>Tags</label>
            <div>
              {tags.map((tag, index) => (
                <Input
                  key={index}
                  value={tag}
                  onChange={(e) => handleTagChange(index, e.target.value)}
                  placeholder={`Tag ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div >
          <Button 
            variant="outline" 
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
