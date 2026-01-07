import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdateTodoModal({ open, value, onChange, onClose, onSave }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
        <Button onClick={onSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
