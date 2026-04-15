import { Check, CheckCheck, Paperclip, ArrowUp, Wifi, Battery, Signal } from "lucide-react";

const ChatMockup = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tablet frame */}
      <div className="rounded-2xl border-2 border-border bg-card shadow-2xl overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-muted/50 text-[10px] text-muted-foreground">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal size={10} />
            <Wifi size={10} />
            <Battery size={10} />
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-primary/5">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            FB
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Federica Bianchi</p>
            <p className="text-[11px] text-muted-foreground">Paziente</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] text-success font-medium">Online</span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="px-4 py-4 space-y-3 bg-muted/30 min-h-[260px]">
          {/* Patient message */}
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-card border border-border shadow-sm">
              <p className="text-sm text-foreground leading-relaxed">
                Buongiorno Dottore, le invio i risultati degli esami del sangue. Potrebbe darmi un parere?
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Paperclip size={10} className="text-primary" />
                <span className="text-[10px] text-primary font-medium">esami_sangue.pdf</span>
              </div>
              <p className="text-[10px] text-muted-foreground text-right mt-1">09:14</p>
            </div>
          </div>

          {/* Doctor message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 bg-primary text-primary-foreground shadow-sm">
              <p className="text-sm leading-relaxed">
                Buongiorno, ho ricevuto tutto. I valori sono nella norma, ne parliamo al prossimo videoconsulto.
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[10px] opacity-70">09:32</p>
                <CheckCheck size={12} className="opacity-70" />
              </div>
            </div>
          </div>

          {/* Patient reply */}
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-card border border-border shadow-sm">
              <p className="text-sm text-foreground leading-relaxed">
                Perfetto, grazie mille! 🙏
              </p>
              <p className="text-[10px] text-muted-foreground text-right mt-1">09:33</p>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-t border-border bg-card">
          <Paperclip size={18} className="text-muted-foreground" />
          <div className="flex-1 rounded-full bg-muted px-3.5 py-2 text-xs text-muted-foreground">
            Scrivi un messaggio...
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Send size={14} className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMockup;
