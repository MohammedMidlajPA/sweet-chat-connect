import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-background p-4">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in duration-1000">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="h-20 w-20 text-primary fill-primary animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight">
            LoveChat
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Connect with hearts around the world in our romantic chat room
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate("/ai-chat")}
          >
            <Heart className="mr-2 h-5 w-5 fill-current" />
            Chat with Your Match
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate("/chat")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Public Chat Room
          </Button>
        </div>

        <div className="pt-12 space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <Heart className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Find Connections</h3>
              <p className="text-sm text-muted-foreground">
                Meet new people and make meaningful connections
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <MessageCircle className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Real-time Chat</h3>
              <p className="text-sm text-muted-foreground">
                Instant messaging with everyone in the room
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <Heart className="h-8 w-8 text-primary mx-auto fill-primary" />
              <h3 className="font-semibold text-lg">Share Love</h3>
              <p className="text-sm text-muted-foreground">
                Express yourself in a welcoming community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
